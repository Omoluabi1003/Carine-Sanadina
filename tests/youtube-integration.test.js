const test = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const script = readFileSync(path.join(root, 'script.js'), 'utf8');
const markup = readFileSync(path.join(root, 'index.html'), 'utf8');
const styles = readFileSync(path.join(root, 'styles.css'), 'utf8');
const youtubeHandler = require('../api/youtube-videos');

const createResponse = () => ({
  headers: {},
  statusCode: null,
  payload: null,
  setHeader(name, value) { this.headers[name] = value; },
  status(code) { this.statusCode = code; return this; },
  json(payload) { this.payload = payload; return this; }
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

test('serverless endpoint fails safely when secrets are not configured', async () => {
  const previousKey = process.env.YOUTUBE_API_KEY;
  const previousChannel = process.env.YOUTUBE_CHANNEL_ID;
  delete process.env.YOUTUBE_API_KEY;
  delete process.env.YOUTUBE_CHANNEL_ID;
  const response = createResponse();
  await youtubeHandler({ method: 'GET' }, response);
  assert.equal(response.statusCode, 503);
  assert.equal(response.headers['Cache-Control'], 'no-store');
  assert.match(response.payload.error, /manual video catalog/);
  if (previousKey === undefined) delete process.env.YOUTUBE_API_KEY; else process.env.YOUTUBE_API_KEY = previousKey;
  if (previousChannel === undefined) delete process.env.YOUTUBE_CHANNEL_ID; else process.env.YOUTUBE_CHANNEL_ID = previousChannel;
});

test('serverless endpoint normalizes uploads and sets quota-saving cache headers', async () => {
  const previousKey = process.env.YOUTUBE_API_KEY;
  const previousChannel = process.env.YOUTUBE_CHANNEL_ID;
  const previousFetch = global.fetch;
  process.env.YOUTUBE_API_KEY = 'server-only-test-key';
  process.env.YOUTUBE_CHANNEL_ID = 'channel-id';
  global.fetch = async (url) => ({
    ok: true,
    json: async () => String(url).includes('/channels?')
      ? { items: [{ contentDetails: { relatedPlaylists: { uploads: 'uploads-id' } } }] }
      : { items: [{ contentDetails: { videoId: 'RMce92iUU3M' }, snippet: { title: 'Exact title', description: 'Description', publishedAt: '2026-01-01T00:00:00Z', thumbnails: { high: { url: 'https://example.com/thumb.jpg' } } } }] }
  });
  const response = createResponse();
  await youtubeHandler({ method: 'GET' }, response);
  assert.equal(response.statusCode, 200);
  assert.equal(response.headers['Cache-Control'], 's-maxage=900, stale-while-revalidate=86400');
  assert.deepEqual(response.payload.videos[0], {
    youtubeVideoId: 'RMce92iUU3M',
    title: 'Exact title',
    description: 'Description',
    thumbnail: 'https://example.com/thumb.jpg',
    publishedAt: '2026-01-01T00:00:00Z'
  });
  global.fetch = previousFetch;
  if (previousKey === undefined) delete process.env.YOUTUBE_API_KEY; else process.env.YOUTUBE_API_KEY = previousKey;
  if (previousChannel === undefined) delete process.env.YOUTUBE_CHANNEL_ID; else process.env.YOUTUBE_CHANNEL_ID = previousChannel;
});
