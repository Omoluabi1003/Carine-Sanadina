const test = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const script = readFileSync(path.join(root, 'script.js'), 'utf8');
const platform = readFileSync(path.join(root, 'content-platform.js'), 'utf8');
const html = readFileSync(path.join(root, 'index.html'), 'utf8');
const build = readFileSync(path.join(root, 'scripts', 'build.js'), 'utf8');

test('Work On Me is registered exactly once in the authoritative playlist', () => {
  const playlist = script.slice(script.indexOf('const CARINE_MUSIC_PLAYLIST = ['), script.indexOf('// Normalize the playlist'));
  assert.equal(playlist.match(/id: 'work-on-me'/g)?.length, 1);
  assert.match(playlist, /coverUrl: '\.\/Work On Me\.jpeg'/);
  assert.match(playlist, /audioUrl: '\.\/Work On Me\.mp3'/);
  assert.match(script, /REQUIRED_MUSIC_TRACK_IDS = \[[^\]]*'work-on-me'/);
});

test('Work On Me participates in Studio, deep links, and structured metadata', () => {
  assert.match(platform, /\['work-on-me', 'Work On Me',[^\n]+'Work On Me\.jpeg'/);
  assert.match(platform, /searchParams\.set\('track', track\.slug\)/);
  assert.equal((html.match(/#music-work-on-me/g) || []).length, 1);
  assert.match(html, /Work%20On%20Me\.jpeg/);
  assert.match(html, /Work%20On%20Me\.mp3/);
});

test('Work On Me assets are valid and included in production builds', () => {
  const audio = readFileSync(path.join(root, 'Work On Me.mp3'));
  const artwork = readFileSync(path.join(root, 'Work On Me.jpeg'));
  assert.ok(audio.length > 128 && (audio.subarray(0, 3).toString() === 'ID3' || audio[0] === 0xff));
  assert.deepEqual([...artwork.subarray(0, 3)], [0xff, 0xd8, 0xff]);
  assert.deepEqual([...artwork.subarray(-2)], [0xff, 0xd9]);
  assert.match(build, /'Work On Me\.jpeg'/);
  assert.match(build, /'Work On Me\.mp3'/);
});

test('Media Session reports JPEG artwork correctly', () => {
  assert.match(script, /artworkType = \/\\\.jpe\?g/);
  assert.match(script, /type: artworkType/);
});
