const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const script = fs.readFileSync(path.join(__dirname, '..', 'script.js'), 'utf8');

test('visualizer owns a singleton recovery-oriented animation loop', () => {
  assert.match(script, /this\.ensureFrameLoop\(\)/);
  assert.match(script, /Math\.min\(50, Math\.max\(0,/);
  assert.match(script, /this\.frameId = window\.requestAnimationFrame\(\(nextTime\) => this\.renderLoop\(nextTime\)\)/);
  assert.match(script, /visualization loop intentionally survives pause and AudioContext suspension/);
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
