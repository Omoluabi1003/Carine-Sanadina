const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const script = fs.readFileSync(path.join(root, 'script.js'), 'utf8');
const styles = fs.readFileSync(path.join(root, 'styles.css'), 'utf8');

test('premium studio halo and cinematic mode preserve the existing record geometry', () => {
  assert.match(html, /data-vinyl-halo/);
  assert.match(html, /data-cinematic-mode/);
  assert.match(styles, /\.expanded-vinyl-wrap\s*\{[\s\S]*?--vinyl-size:\s*min\(100%, 360px\)/);
  assert.match(styles, /\.vinyl-audio-halo\s*\{[\s\S]*?position:\s*absolute/);
});

test('visualizations share genuine Web Audio analyser samples and static fallback', () => {
  assert.match(script, /this\.analyser\.fftSize\s*=\s*2048/);
  assert.match(script, /getByteFrequencyData\(this\.frequencyData\)/);
  assert.match(script, /getByteTimeDomainData\(this\.waveformData\)/);
  assert.match(script, /this\.renderHalo\(bands, state\)/);
  assert.match(styles, /A resting\/fallback display is deliberately static/);
  assert.doesNotMatch(script, /fallbackWave\s*=/);
});

test('album artwork atmosphere caches colors and rejects stale extraction results', () => {
  assert.match(script, /const artworkPaletteCache = new Map\(\)/);
  assert.match(script, /request !== artworkPaletteRequest/);
  assert.match(script, /image\.crossOrigin = 'anonymous'/);
  assert.match(styles, /--album-primary/);
});
