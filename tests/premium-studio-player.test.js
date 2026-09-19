const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const script = fs.readFileSync(path.join(root, 'script.js'), 'utf8');
const styles = fs.readFileSync(path.join(root, 'styles.css'), 'utf8');

test('turntable selection restores safely and switches without accessing playback', () => {
  const vm = require('node:vm');
  const source = script.slice(script.indexOf('// Model selection changes the cabinet only:'));
  const nodes = new Map();
  const cabinet = { dataset: {}, querySelector: key => {
    if (!nodes.has(key)) nodes.set(key, {});
    return nodes.get(key);
  } };
  let change;
  const selector = { value: '', closest: () => cabinet, addEventListener: (_, listener) => { change = listener; } };
  vm.runInNewContext(source, {
    document: { querySelector: () => selector },
    localStorage: { getItem: () => 'invalid', setItem: () => { throw new Error('Disabled'); } }
  });
  assert.equal(cabinet.dataset.turntableModel, 'direct');
  for (const model of ['audiophile', 'broadcast', 'direct']) {
    selector.value = model;
    change();
    assert.equal(cabinet.dataset.turntableModel, model);
  }
  assert.doesNotMatch(source, /\.play\(|\.pause\(|new Audio|currentTime|innerHTML/);
});

test('vinyl lighting and live halo remain visible without fake audio motion', () => {
  assert.match(styles, /\.vinyl-audio-halo\s*\{[^}]*z-index:\s*3/);
  assert.match(styles, /\.turntable-assembly \.expanded-vinyl-wrap::after\s*\{[^}]*pointer-events:\s*none/);
  assert.match(script, /!this\.fallbackActive && !this\.analyserFlat && !reduceMotion/);
  assert.match(script, /energy \* size \* 0\.052/);
});

test('halo draws finite coordinates from actual bass and spectrum values', () => {
  const vm = require('node:vm');
  const body = script.slice(script.indexOf("    renderHalo(bands, state = 'idle') {"), script.indexOf('    getAnalyserSnapshot() {'));
  const renderer = vm.runInNewContext(`({${body}})`, { reduceMotion: false });
  let strokes = 0;
  const finite = (...values) => values.forEach(value => assert.ok(Number.isFinite(value)));
  renderer.halo = { getBoundingClientRect: () => ({ width: 320 }), closest: () => null };
  renderer.haloContext = {
    clearRect: finite, save() {}, restore() {}, translate: finite,
    beginPath() {}, moveTo: finite, lineTo: finite, arc: finite,
    stroke() { strokes += 1; }
  };
  renderer.enabled = true;
  renderer.fallbackActive = false;
  renderer.analyserFlat = false;
  const bands = { bass: 0.6, spectrum: new Float32Array(48).fill(0.4) };
  renderer.renderHalo(bands, 'playing');
  assert.equal(strokes, 72);
  renderer.analyserFlat = true;
  strokes = 0;
  renderer.renderHalo(bands, 'playing');
  assert.equal(strokes, 2);
});

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
