const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(root, 'styles.css'), 'utf8');
const script = fs.readFileSync(path.join(root, 'script.js'), 'utf8');

test('turntable hardware is integrated inside one deck assembly', () => {
  const assembly = html.match(/<div class="direct-drive-deck turntable-assembly">([\s\S]*?)<div class="console-transport">/)?.[1] || '';

  assert.match(assembly, /data-vinyl-stage/);
  assert.match(assembly, /data-vinyl-disc/);
  assert.match(assembly, /class="record-spindle"/);
  assert.match(assembly, /class="tonearm-assembly"[^>]*data-tonearm/);
  assert.match(assembly, /class="tonearm-counterweight"/);
  assert.match(assembly, /class="tonearm-headshell"/);
  assert.doesNotMatch(assembly, /class="tonearm-rest"/);
  assert.match(assembly, /class="deck-ambient-light"/);
});

test('turntable geometry remains deck-relative and circular in layout', () => {
  assert.match(css, /\.turntable-assembly\s*\{[\s\S]*?perspective:\s*1200px/);
  assert.match(css, /\.tonearm-assembly\s*\{[\s\S]*?position:\s*absolute[\s\S]*?left:\s*42\.5%/);
  assert.match(css, /\.turntable-assembly \.expanded-vinyl-disc\s*\{[\s\S]*?aspect-ratio:\s*1\s*\/\s*1/);
  assert.doesNotMatch(css, /\.tonearm-assembly\s*\{[^}]*\b(?:vw|vh|dvw|dvh)\b/);
  assert.match(css, /\.turntable-assembly \.console-turntable::before\s*\{[\s\S]*?transform:\s*translateZ\(-8px\)/);
  assert.doesNotMatch(css, /\.turntable-assembly \.console-turntable\s*\{[^}]*rotateX\(/);
  assert.match(css, /data-playback-state="playing"[\s\S]*?\.tonearm-moving-group\s*\{[\s\S]*?rotate\(18deg\)/);
});

test('every track fills the same vinyl label area', () => {
  const vinylArtworkRule = css.match(/\.direct-drive-deck \.expanded-vinyl-label \.mobile-player-cover\s*\{([\s\S]*?)\}/)?.[1] || '';

  assert.match(vinylArtworkRule, /width:\s*100%/);
  assert.match(vinylArtworkRule, /height:\s*100%/);
  assert.match(vinylArtworkRule, /padding:\s*0/);
  assert.match(vinylArtworkRule, /object-fit:\s*cover/);
  assert.match(vinylArtworkRule, /object-position:\s*center center/);
});

test('vinyl uses requestAnimationFrame inertia and maps tonearm playback states', () => {
  assert.match(script, /requestAnimationFrame\(animateVinylRotation\)/);
  assert.match(script, /disc\.style\.transform\s*=\s*discTransform/);
  assert.match(script, /disc\.style\.webkitTransform\s*=\s*discTransform/);
  assert.match(css, /-webkit-transform:\s*translate3d\(0, 0, 4px\) rotateZ\(var\(--vinyl-rotation\)\)/);
  assert.match(script, /vinylDeceleration/);
  assert.match(script, /vinylVelocity\s*>\s*0/);
  assert.match(script, /syncVinylExperience\(false, 'ended'\)/);
  assert.match(css, /data-playback-state="playing"/);
  assert.match(css, /data-playback-state="paused"/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
});
