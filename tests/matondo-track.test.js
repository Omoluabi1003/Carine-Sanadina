const test = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const script = readFileSync(path.join(root, 'script.js'), 'utf8');
const indexHtml = readFileSync(path.join(root, 'index.html'), 'utf8');
const buildScript = readFileSync(path.join(root, 'scripts', 'build.js'), 'utf8');

test('Matondo uses the supplied audio and dedicated cover artwork', () => {
  const track = script.match(/id: 'matondo',\n[\s\S]*?\n  }/)?.[0];

  assert.ok(track, 'Matondo track configuration must be present');
  assert.match(track, /coverUrl: '\.\/Matondo\.jpeg'/);
  assert.match(track, /audioUrl: 'https:\/\/raw\.githubusercontent\.com\/Omoluabi1003\/Carine-Sanadina\/main\/Matondo\.mp3'/);
  assert.match(track, /duration: 251\.616/);
  assert.match(script, /const REQUIRED_MUSIC_TRACK_IDS = \[[^\]]*'matondo'[^\]]*\]/);
});

test('Matondo is discoverable through structured music metadata', () => {
  const metadata = indexHtml.match(/\{ "@type": "MusicRecording"[^\n]+#music-matondo[^\n]+\}/)?.[0];

  assert.ok(metadata, 'Matondo structured metadata must be present');
  assert.match(metadata, /"image": "https:\/\/omoluabi1003\.github\.io\/Carine-Sanadina\/Matondo\.jpeg"/);
  assert.match(metadata, /"contentUrl": "https:\/\/raw\.githubusercontent\.com\/Omoluabi1003\/Carine-Sanadina\/main\/Matondo\.mp3"/);
});

test('the Matondo cover is a valid JPEG included in production builds', () => {
  assert.match(buildScript, /'Matondo\.jpeg'/);

  const cover = readFileSync(path.join(root, 'Matondo.jpeg'));
  assert.deepEqual([...cover.subarray(0, 3)], [0xff, 0xd8, 0xff]);
  assert.deepEqual([...cover.subarray(-2)], [0xff, 0xd9]);
});

test('Matondo has complete localized player labels', () => {
  const translations = script.match(/const matondoTranslations = \{[\s\S]*?\n\};/)?.[0];

  assert.ok(translations, 'Matondo translations must be present');
  for (const language of ['en', 'fr', 'es', 'ln', 'sw', 'yo', 'de', 'ar', "'zh-CN'"]) {
    assert.match(translations, new RegExp(`\\n  ${language}:`));
  }
});
