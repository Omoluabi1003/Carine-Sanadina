// Run with Node and ffmpeg when the local audio catalog changes.
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
const tracks = { consolation: 'Consolation.mp3', gentillesse: 'La Gentillesse.mp3', wonderful: 'Wonderful.mp3', womanifesto: 'Womanifesto (1).mp3', 'paranoia-persecutive': 'Paranoïa Persécutive.mp3', reason: 'Reason.mp3', halleluyah: 'Hallelujah.mp3', hosanna: 'Hosanna.mp3', matondo: 'Matondo.mp3' };
const result = {};
for (const [id, file] of Object.entries(tracks)) {
  const pcm = execFileSync('ffmpeg', ['-v', 'error', '-i', path.join(root, file), '-ac', '1', '-ar', '8000', '-f', 'f32le', 'pipe:1'], { maxBuffer: 32000000 });
  const count = pcm.length / 4;
  const peaks = Array.from({ length: 120 }, (_, bin) => {
    let peak = 0;
    for (let i = Math.floor(bin * count / 120); i < Math.floor((bin + 1) * count / 120); i++) peak = Math.max(peak, Math.abs(pcm.readFloatLE(i * 4)));
    return Math.round(Math.min(1, peak) * 1000) / 1000;
  });
  result[id] = { duration: count / 8000, peaks };
}
fs.mkdirSync(path.join(root, 'public'), { recursive: true });
fs.writeFileSync(path.join(root, 'public', 'waveforms.json'), JSON.stringify(result));
console.log('Generated real full-track peaks for', Object.keys(result).length, 'tracks');
