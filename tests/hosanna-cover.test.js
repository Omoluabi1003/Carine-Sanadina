const test = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const coverFile = 'CS logo.png';
const sameSiteCoverUrl = './CS%20logo.png';
const deployedCoverUrl = 'https://omoluabi1003.github.io/Carine-Sanadina/CS%20logo.png';
const script = readFileSync(path.join(root, 'script.js'), 'utf8');
const indexHtml = readFileSync(path.join(root, 'index.html'), 'utf8');
const buildScript = readFileSync(path.join(root, 'scripts', 'build.js'), 'utf8');
const serviceWorker = readFileSync(path.join(root, 'sw.js'), 'utf8');

test('Hosanna uses the deployed same-site cover URL', () => {
  const hosannaTrack = script.match(/title: 'Hosanna',[\s\S]*?\n  },/)?.[0];

  assert.ok(hosannaTrack, 'Hosanna track configuration must be present');
  assert.match(hosannaTrack, new RegExp(`coverUrl: '${sameSiteCoverUrl.replace('.', '\\\.')}'`));
  assert.doesNotMatch(hosannaTrack, /raw\.githubusercontent\.com[^'\n]+CS%20logo\.png/);
});

test('Hosanna structured metadata uses the corresponding GitHub Pages cover URL', () => {
  const hosannaMetadata = indexHtml.match(/\{ "@type": "MusicRecording"[^\n]+#music-hosanna[^\n]+\}/)?.[0];

  assert.ok(hosannaMetadata, 'Hosanna structured metadata must be present');
  assert.match(hosannaMetadata, new RegExp(`"image": "${deployedCoverUrl.replaceAll('.', '\\\.')}"`));
});

test('the approved PNG cover is included in builds and has a valid PNG signature', () => {
  assert.match(buildScript, new RegExp(`'${coverFile.replace('.', '\\\.')}'`));

  const signature = readFileSync(path.join(root, coverFile)).subarray(0, 8);
  assert.deepEqual([...signature], [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
});

test('app and service-worker versions are synchronized for the cover rollout', () => {
  const appVersion = script.match(/const APP_VERSION = '([^']+)'/)?.[1];
  const workerVersion = serviceWorker.match(/const APP_VERSION = '([^']+)'/)?.[1];

  assert.equal(workerVersion, appVersion);
  assert.match(appVersion, /hosanna-cover-fix$/);
  assert.match(serviceWorker, /const CACHE_VERSION = `carine-static-v14-\$\{APP_VERSION\}`/);
});
