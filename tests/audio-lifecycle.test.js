const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const script = fs.readFileSync(path.join(root, 'script.js'), 'utf8');
const serviceWorker = fs.readFileSync(path.join(root, 'sw.js'), 'utf8');

test('lifecycle restores reconcile state without requesting playback', () => {
  const visibilityHandler = script.match(/document\.addEventListener\('visibilitychange',[\s\S]*?\n  \}\);/)?.[0] || '';
  assert.match(visibilityHandler, /reconcileAudioState\('visibility-visible'\)/);
  assert.doesNotMatch(visibilityHandler, /\.play\(|playAudio\(|playActiveTrack\(/);
  assert.match(script, /window\.addEventListener\('pageshow',[\s\S]*?reconcileAudioState\('pageshow'\)/);
  assert.match(script, /window\.addEventListener\('focus',[\s\S]*?reconcileAudioState\('focus'\)/);
});

test('all playback is guarded by single-audio ownership', () => {
  assert.match(script, /const pauseAllOtherAudios = \(exceptAudio = null\)/);
  assert.match(script, /pauseAllOtherAudios\(audio\);\n\s+const playbackPromise = Promise\.resolve\(audio\.play\(\)\)/);
  assert.equal((script.match(/Promise\.resolve\(audio\.play\(\)\)/g) || []).length, 1);
});

test('restored and default tracks never autoplay', () => {
  const restoreBody = script.match(/const restorePlayerStateWithoutAutoplay = \(\) => \{[\s\S]*?\n  \};/)?.[0] || '';
  assert.match(restoreBody, /setActiveTrack\(restoredPlayer\)/);
  assert.doesNotMatch(restoreBody, /\.play\(|playAudio\(|playActiveTrack\(/);
});

test('audio debug mode and report expose ownership diagnostics', () => {
  assert.match(script, /audioDebug'\) === 'true'/);
  assert.match(script, /carineAudioDebug/);
  [
    'activeTrackId',
    'activeTrackTitle',
    'activeAudioSrc',
    'activeAudioPaused',
    'activeAudioCurrentTime',
    'allAudioElements',
    'audibleAudioElements',
    'duplicateAudioDetected',
    'lastLifecycleEvent',
    'lastPlayRequestSource'
  ].forEach((field) => assert.match(script, new RegExp(field)));
  assert.match(script, /window\.debugAudioState/);
});

test('player session survives document recreation without autoplay or navigation', () => {
  assert.match(script, /PLAYER_SESSION_STORAGE_KEY/);
  assert.match(script, /window\.sessionStorage\.setItem\(PLAYER_SESSION_STORAGE_KEY/);
  ['route', 'activeTrackId', 'trackUrl', 'currentTime', 'playing', 'volume', 'visualizationMode', 'playerExpanded']
    .forEach((field) => assert.match(script, new RegExp(`${field}:`)));
  assert.match(script, /loadedmetadata', restorePosition, \{ once: true \}/);
  assert.match(script, /if \(storedState\.playerExpanded\) setMobilePlayerOpen\(true\)/);
  assert.match(script, /source: 'player-session-restore'/);
  assert.match(script, /window\.history\.replaceState/);
});

test('updates and media recovery cannot reload or navigate the application', () => {
  assert.doesNotMatch(script, /(?:window\.)?location\.reload\s*\(/);
  assert.doesNotMatch(script, /history\.go\s*\(\s*0\s*\)/);
  assert.doesNotMatch(script, /location\.(?:assign|replace)\s*\(/);
  assert.doesNotMatch(serviceWorker, /skipWaiting\s*\(/);
  assert.match(script, /automatic reload suppressed/);
});

test('continuous visual frames isolate exceptions and retain one scheduled loop', () => {
  assert.match(script, /\[VISUALIZER\] frame disabled/);
  assert.match(script, /vinyl frame failed without interrupting playback/);
  assert.match(script, /if \(this\.frameId \|\| !this\.container\) return/);
  assert.match(script, /}, 4000\);/);
});
