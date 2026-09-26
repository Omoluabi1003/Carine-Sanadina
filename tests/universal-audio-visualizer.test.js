const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const script = fs.readFileSync(path.join(__dirname, '..', 'script.js'), 'utf8');

test('visualizer owns one playback-bound adaptive animation loop', () => {
  assert.match(script, /this\.ensureFrameLoop\(\)/);
  assert.match(script, /Math\.min\(50, Math\.max\(0,/);
  assert.match(script, /this\.frameId = window\.requestAnimationFrame\(\(nextTime\) => this\.renderLoop\(nextTime\)\)/);
  assert.match(script, /minimumFrameInterval = constrainedDevice \? 1000 \/ 30 : 1000 \/ 60/);
  assert.match(script, /stopFrameLoop\(\)/);
  assert.match(script, /renderVinylEngineFrame\(time\)/);
  assert.match(script, /recoverVisualizer\(\)/);
});

test('Web Audio graph is configured once and buffers match analyser dimensions', () => {
  assert.match(script, /this\.analyser\.fftSize = 2048/);
  assert.match(script, /this\.analyser\.smoothingTimeConstant = 0\.82/);
  assert.match(script, /this\.analyser\.minDecibels = -90/);
  assert.match(script, /this\.analyser\.maxDecibels = -10/);
  assert.match(script, /new Uint8Array\(this\.analyser\.frequencyBinCount\)/);
  assert.match(script, /new Uint8Array\(this\.analyser\.fftSize\)/);
  assert.match(script, /this\.mediaSourceNodes = new WeakMap\(\)/);
  assert.match(script, /this\.analyserConnectedToDestination/);
});

test('frequency metrics use sample-rate-derived bins and time-domain RMS', () => {
  assert.match(script, /minimumHz \* fftSize \/ sampleRate/);
  for (const range of ['20, 60', '60, 250', '250, 500', '500, 2000', '2000, 6000', '6000, 16000']) {
    assert.match(script, new RegExp(`frequencyRangeAverage\\(this\\.frequencyData, ${range}\\)`));
  }
  assert.match(script, /Math\.sqrt\(rmsSum \/ Math\.max\(1, this\.waveformData\.length\)\)/);
  assert.match(script, /this\.smoothedMetrics\.peak = Math\.max\(0, this\.smoothedMetrics\.peak - 0\.04 \* dt \/ 1000\)/);
});

test('canvas and lifecycle adapt across mobile and restored pages', () => {
  assert.match(script, /typeof window\.ResizeObserver === 'function'/);
  assert.match(script, /width < 420 \? 32 : width < 720 \? 48 : WAVEFORM_UNIT_COUNT/);
  assert.match(script, /window\.devicePixelRatio \|\| 1/);
  assert.match(script, /window\.addEventListener\('orientationchange'/);
  assert.match(script, /window\.addEventListener\('pageshow',[\s\S]*?recoverVisualizer\(\)/);
  assert.match(script, /document\.addEventListener\('visibilitychange',[\s\S]*?recoverVisualizer\(\)/);
});

test('visualization uses a cached, contrast-aware frequency palette', () => {
  assert.match(script, /this\.visualGradientKey = ''/);
  assert.match(script, /createLinearGradient\(0, 0, this\.cssWidth, 0\)/);
  for (const color of ['#00D68F', '#4EC7C2', '#38BDF8', '#8B5CF6', '#E0B968']) {
    assert.match(script, new RegExp(color));
  }
  assert.match(script, /luminance > 0\.55/);
  assert.match(script, /Math\.max\(0\.82,/);
  assert.match(script, /this\.glowGradientKey === key/);
  assert.match(script, /ensureGlowGradient\(\)/);
  assert.equal((script.match(/createRadialGradient/g) || []).length, 1);
  const renderFrameStart = script.indexOf('renderFrame(bands, time =');
  const renderFrameEnd = script.indexOf('\n    renderHalo(', renderFrameStart);
  assert.doesNotMatch(script.slice(renderFrameStart, renderFrameEnd), /createRadialGradient/);
});

test('lifecycle evidence distinguishes discard, reload, and history restoration', () => {
  for (const marker of ['bootId', 'navigationType', 'pageshowPersisted', 'wasDiscarded', 'priorPagehideAt', 'lastPlaybackTime', 'visualizerFrames', 'vinylFrames']) {
    assert.match(script, new RegExp(marker));
  }
});

test('waveform strokes remain crisp and disable glow first on low-power devices', () => {
  assert.match(script, /width < 600 \? 2 : width < 900 \? 2\.4 : 2\.8/);
  assert.match(script, /context\.lineCap = 'round'/);
  assert.match(script, /context\.lineJoin = 'round'/);
  assert.match(script, /navigator\.deviceMemory && navigator\.deviceMemory <= 2/);
});
