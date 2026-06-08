const YOUTUBE_API_BASE = 'https://www.googleapis.com/youtube/v3';
const VIDEO_ID_PATTERN = /^[A-Za-z0-9_-]{11}$/;
const MAX_RESULTS = 12;
const CACHE_TTL_SECONDS = 900;

const jsonResponse = (payload, status = 200, cacheControl = 'no-store') => new Response(
  JSON.stringify(payload),
  {
    status,
    headers: {
      'Cache-Control': cacheControl,
      'Content-Type': 'application/json; charset=utf-8',
      'X-Content-Type-Options': 'nosniff'
    }
  }
);

const fetchYouTubeJson = async (path, parameters, apiKey) => {
  const url = new URL(`${YOUTUBE_API_BASE}/${path}`);

  Object.entries({ ...parameters, key: apiKey }).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  const upstream = await fetch(url, {
    headers: { Accept: 'application/json' },
    cf: { cacheTtl: CACHE_TTL_SECONDS, cacheEverything: true }
  });

  if (!upstream.ok) {
    throw new Error(`YouTube Data API returned ${upstream.status}`);
  }

  return upstream.json();
};

const getYouTubeVideos = async (env) => {
  const channelPayload = await fetchYouTubeJson('channels', {
    id: env.YOUTUBE_CHANNEL_ID,
    part: 'contentDetails'
  }, env.YOUTUBE_API_KEY);
  const uploadsPlaylistId = channelPayload.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;

  if (!uploadsPlaylistId) {
    throw new Error('The configured channel has no uploads playlist.');
  }

  const playlistPayload = await fetchYouTubeJson('playlistItems', {
    playlistId: uploadsPlaylistId,
    part: 'snippet,contentDetails',
    maxResults: String(MAX_RESULTS)
  }, env.YOUTUBE_API_KEY);

  return (playlistPayload.items || []).map((item) => {
    const youtubeVideoId = item.contentDetails?.videoId || item.snippet?.resourceId?.videoId || '';

    if (!VIDEO_ID_PATTERN.test(youtubeVideoId)) {
      return null;
    }

    const snippet = item.snippet || {};

    return {
      youtubeVideoId,
      title: snippet.title || 'Carine Sanadina — YouTube Video',
      description: snippet.description || '',
      thumbnail: snippet.thumbnails?.high?.url
        || snippet.thumbnails?.medium?.url
        || `https://img.youtube.com/vi/${youtubeVideoId}/hqdefault.jpg`,
      publishedAt: snippet.publishedAt || ''
    };
  }).filter(Boolean);
};

const handleYouTubeVideos = async (request, env, ctx) => {
  if (request.method !== 'GET') {
    const response = jsonResponse({ error: 'Method not allowed' }, 405);
    response.headers.set('Allow', 'GET');
    return response;
  }

  if (!env.YOUTUBE_API_KEY || !env.YOUTUBE_CHANNEL_ID) {
    return jsonResponse({
      error: 'YouTube automation is not configured. The website will use its manual video catalog.'
    }, 503);
  }

  const cache = caches.default;
  const cacheKey = new Request(request.url, { method: 'GET' });
  const cachedResponse = await cache.match(cacheKey);

  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const videos = await getYouTubeVideos(env);
    const response = jsonResponse(
      { videos },
      200,
      `public, max-age=60, s-maxage=${CACHE_TTL_SECONDS}, stale-while-revalidate=86400`
    );

    ctx.waitUntil(cache.put(cacheKey, response.clone()));
    return response;
  } catch (error) {
    console.error('[api/youtube-videos]', error);
    return jsonResponse({ error: 'Unable to retrieve YouTube videos.' }, 502);
  }
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === '/api/youtube-videos') {
      return handleYouTubeVideos(request, env, ctx);
    }

    if (url.pathname.startsWith('/api/')) {
      return jsonResponse({ error: 'Not found' }, 404);
    }

    return env.ASSETS.fetch(request);
  }
};
