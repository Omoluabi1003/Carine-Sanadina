const YOUTUBE_API_BASE = 'https://www.googleapis.com/youtube/v3';
const VIDEO_ID_PATTERN = /^[A-Za-z0-9_-]{11}$/;
const MAX_RESULTS = 12;

const sendJson = (response, status, payload) => {
  response.status(status).json(payload);
};

const fetchYouTubeJson = async (path, parameters, apiKey) => {
  const url = new URL(`${YOUTUBE_API_BASE}/${path}`);
  Object.entries({ ...parameters, key: apiKey }).forEach(([key, value]) => url.searchParams.set(key, value));
  const upstream = await fetch(url, { headers: { Accept: 'application/json' } });
  if (!upstream.ok) throw new Error(`YouTube Data API returned ${upstream.status}`);
  return upstream.json();
};

module.exports = async (request, response) => {
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET');
    return sendJson(response, 405, { error: 'Method not allowed' });
  }

  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;
  if (!apiKey || !channelId) {
    response.setHeader('Cache-Control', 'no-store');
    return sendJson(response, 503, {
      error: 'YouTube automation is not configured. The website will use its manual video catalog.'
    });
  }

  try {
    const channelPayload = await fetchYouTubeJson('channels', {
      id: channelId,
      part: 'contentDetails'
    }, apiKey);
    const uploadsPlaylistId = channelPayload.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
    if (!uploadsPlaylistId) throw new Error('The configured channel has no uploads playlist.');

    const playlistPayload = await fetchYouTubeJson('playlistItems', {
      playlistId: uploadsPlaylistId,
      part: 'snippet,contentDetails',
      maxResults: String(MAX_RESULTS)
    }, apiKey);

    const videos = (playlistPayload.items || []).map((item) => {
      const youtubeVideoId = item.contentDetails?.videoId || item.snippet?.resourceId?.videoId || '';
      if (!VIDEO_ID_PATTERN.test(youtubeVideoId)) return null;
      const snippet = item.snippet || {};
      return {
        youtubeVideoId,
        title: snippet.title || 'Carine Sanadina — YouTube Video',
        description: snippet.description || '',
        thumbnail: snippet.thumbnails?.high?.url || snippet.thumbnails?.medium?.url || `https://img.youtube.com/vi/${youtubeVideoId}/hqdefault.jpg`,
        publishedAt: snippet.publishedAt || ''
      };
    }).filter(Boolean);

    response.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate=86400');
    return sendJson(response, 200, { videos });
  } catch (error) {
    console.error('[api/youtube-videos]', error);
    response.setHeader('Cache-Control', 'no-store');
    return sendJson(response, 502, { error: 'Unable to retrieve YouTube videos.' });
  }
};
