const test = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const script = readFileSync(path.join(root, 'script.js'), 'utf8');
const markup = readFileSync(path.join(root, 'index.html'), 'utf8');
const styles = readFileSync(path.join(root, 'styles.css'), 'utf8');

const loadWorker = async () => (await import('../src/worker.mjs')).default;

const createExecutionContext = () => ({
  promises: [],
  waitUntil(promise) { this.promises.push(promise); }
});

test('manual catalog and in-app player contract are present', () => {
  for (const videoId of ['RMce92iUU3M', 'aFnhMh4wUks', 'qLWoxh2u5sk', 'qAh9qzNGjNY']) {
    assert.match(script, new RegExp(`youtubeVideoId: '${videoId}'`));
  }
  assert.match(script, /https:\/\/www\.youtube\.com\/embed\/\$\{videoId\}/);
  assert.match(script, /videoGrid\?\.addEventListener\('click'/);
  assert.match(script, /videoIframe\.removeAttribute\('src'\)/);
  assert.match(script, /document\.querySelectorAll\('audio'\)/);
  assert.match(script, /loadAutomaticYouTubeVideos\(\)/);
});

test('thumbnail, title, play icon, and Watch Video share delegated playback action', () => {
  assert.match(script, /video-card__thumbnail-hit[^>]+data-video-open/);
  assert.match(script, /video-card__play[^>]+data-video-open[^>]+data-video-play-icon/);
  assert.match(script, /video-card__title[^>]+data-video-open/);
  assert.match(script, /video-card__button[^>]+data-video-open/);
  assert.match(styles, /\.video-card__play \{[^}]*pointer-events: auto;/s);
  assert.match(styles, /\.video-card__thumbnail::after \{[^}]*pointer-events: none;/s);
});

test('channel links are explicit external links and never iframe sources', () => {
  const channelLinks = markup.match(/href="https:\/\/youtube\.com\/@cariotendre\?si=HsyeKHavudAxk3tu"[^>]+target="_blank"[^>]+rel="noopener noreferrer"/g) || [];
  assert.equal(channelLinks.length, 3);
  assert.doesNotMatch(script, /videoIframe\.src\s*=\s*YOUTUBE_CHANNEL_URL/);
  assert.doesNotMatch(script, /videoIframe\.src\s*=\s*['"]https:\/\/youtu\.be/);
});

test('debug utility exposes all requested diagnostics', () => {
  for (const field of ['videoCount', 'clickedElement', 'selectedVideoId', 'iframeSrc', 'drawerOpen', 'playerOpen', 'playIconPointerEvents', 'topElementAtPlayIcon', 'hasValidEmbedUrl']) {
    assert.match(script, new RegExp(`${field}:`));
  }
});

test('Cloudflare Worker endpoint fails safely when secrets are not configured', async () => {
  const worker = await loadWorker();
  const response = await worker.fetch(
    new Request('https://example.com/api/youtube-videos'),
    {},
    createExecutionContext()
  );

  assert.equal(response.status, 503);
  assert.equal(response.headers.get('Cache-Control'), 'no-store');
  assert.match((await response.json()).error, /manual video catalog/);
});

test('Cloudflare Worker endpoint normalizes uploads and caches quota-saving responses', async () => {
  const worker = await loadWorker();
  const previousFetch = global.fetch;
  const previousCaches = global.caches;
  const cachedResponses = new Map();
  global.caches = {
    default: {
      async match(request) { return cachedResponses.get(request.url); },
      async put(request, response) { cachedResponses.set(request.url, response); }
    }
  };
  global.fetch = async (url) => ({
    ok: true,
    json: async () => String(url).includes('/channels?')
      ? { items: [{ contentDetails: { relatedPlaylists: { uploads: 'uploads-id' } } }] }
      : { items: [{ contentDetails: { videoId: 'RMce92iUU3M' }, snippet: { title: 'Exact title', description: 'Description', publishedAt: '2026-01-01T00:00:00Z', thumbnails: { high: { url: 'https://example.com/thumb.jpg' } } } }] }
  });

  try {
    const context = createExecutionContext();
    const response = await worker.fetch(
      new Request('https://example.com/api/youtube-videos'),
      { YOUTUBE_API_KEY: 'server-only-test-key', YOUTUBE_CHANNEL_ID: 'channel-id' },
      context
    );

    assert.equal(response.status, 200);
    assert.equal(response.headers.get('Cache-Control'), 'public, max-age=60, s-maxage=900, stale-while-revalidate=86400');
    assert.deepEqual((await response.json()).videos[0], {
      youtubeVideoId: 'RMce92iUU3M',
      title: 'Exact title',
      description: 'Description',
      thumbnail: 'https://example.com/thumb.jpg',
      publishedAt: '2026-01-01T00:00:00Z'
    });
    await Promise.all(context.promises);
    assert.equal(cachedResponses.size, 1);
  } finally {
    global.fetch = previousFetch;
    global.caches = previousCaches;
  }
});
