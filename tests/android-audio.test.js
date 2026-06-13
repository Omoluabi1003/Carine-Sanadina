const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const script = fs.readFileSync(path.join(root, 'script.js'), 'utf8');

const playAudioBody = script.match(/const playActiveTrack = async \(source,[\s\S]*?\n  };\n\n  const playAudio/)?.[0] || '';

test('audio playback starts before asynchronous visualizer setup', () => {
  const playCallIndex = playAudioBody.indexOf('const playbackPromise = Promise.resolve(audio.play())');
  const analyserCallIndex = playAudioBody.indexOf('ensureAudioContextForGesture');
  const firstAwaitIndex = playAudioBody.indexOf('await ');

  assert.notEqual(playCallIndex, -1);
  assert.notEqual(analyserCallIndex, -1);
  assert.ok(playCallIndex < analyserCallIndex, 'audio.play() must be invoked first within the user gesture');
  assert.ok(playCallIndex < firstAwaitIndex, 'audio.play() must be invoked before the first async boundary');
});

test('visualizer setup failure does not reject audio playback', () => {
  assert.match(playAudioBody, /analyserSetupPromise = ensureAudioContextForGesture[\s\S]*?\.catch\(\(error\) => \{[\s\S]*?return false;/);
  assert.match(playAudioBody, /await playbackPromise;\n\s+const analyserReady = await analyserSetupPromise;/);
});
