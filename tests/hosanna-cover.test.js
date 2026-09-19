const test = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const coverFile = 'Hosanna.jpg';
const sameSiteCoverUrl = './Hosanna.jpg';
const deployedCoverUrl = 'https://omoluabi1003.github.io/Carine-Sanadina/Hosanna.jpg';
const script = readFileSync(path.join(root, 'script.js'), 'utf8');
const indexHtml = readFileSync(path.join(root, 'index.html'), 'utf8');
const buildScript = readFileSync(path.join(root, 'scripts', 'build.js'), 'utf8');
const serviceWorker = readFileSync(path.join(root, 'sw.js'), 'utf8');

test('Hosanna uses its dedicated same-site cover artwork', () => {
  const hosannaTrack = script.match(/title: 'Hosanna',[\s\S]*?\n  },/)?.[0];

  assert.ok(hosannaTrack, 'Hosanna track configuration must be present');
  assert.match(hosannaTrack, new RegExp(`coverUrl: '${sameSiteCoverUrl.replace('.', '\\\.')}'`));
  assert.doesNotMatch(hosannaTrack, /coverUrl: ['"](?:\.\/)?CS%20logo\.png/);
  assert.doesNotMatch(hosannaTrack, /artworkFit: 'contain'/, 'square cover art should fill its frame');
});

test('Hosanna structured metadata uses the corresponding GitHub Pages cover URL', () => {
  const hosannaMetadata = indexHtml.match(/\{ "@type": "MusicRecording"[^\n]+#music-hosanna[^\n]+\}/)?.[0];

  assert.ok(hosannaMetadata, 'Hosanna track metadata must be present');
  assert.match(hosannaMetadata, new RegExp(`"image": "${deployedCoverUrl.replaceAll('.', '\\\.')}"`));
});

test('the dedicated JPEG cover is included in builds and has a valid JPEG signature', () => {
  assert.match(buildScript, new RegExp(`'${coverFile.replace('.', '\\\.')}'`));

  const cover = readFileSync(path.join(root, coverFile));
  assert.deepEqual([...cover.subarray(0, 3)], [0xff, 0xd8, 0xff]);
  assert.deepEqual([...cover.subarray(-2)], [0xff, 0xd9]);
});

test('Hosanna alt text describes cover artwork rather than a logo', () => {
  const hosannaTranslations = script.match(/const hosannaTranslations = \{[\s\S]*?\n\};/)?.[0];

  assert.ok(hosannaTranslations, 'Hosanna translations must be present');
  assert.doesNotMatch(hosannaTranslations, /coverAlt[^\n]*(?:logo|logotipo|شعار|标志)/i);
});

test('app and service-worker versions remain synchronized after the artwork rollout', () => {
  const appVersion = script.match(/const APP_VERSION = '([^']+)'/)?.[1];
  const workerVersion = serviceWorker.match(/const APP_VERSION = '([^']+)'/)?.[1];

  assert.equal(workerVersion, appVersion);
  assert.match(appVersion, /^carine-site-/);
  assert.match(serviceWorker, /const CACHE_VERSION = `carine-static-v14-\$\{APP_VERSION\}`/);
});
