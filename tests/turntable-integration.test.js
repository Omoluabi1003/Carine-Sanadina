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
  assert.match(assembly, /class="vinyl-spin-layer"[^>]*data-vinyl-spin-layer/);
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

test('vinyl separates the tilt and spin transforms and maps playback states', () => {
  assert.match(css, /\.turntable-assembly \.expanded-vinyl-wrap\s*\{[\s\S]*?perspective\(1200px\) rotateX\(0\.01deg\)/);
  assert.match(css, /\.turntable-assembly \.vinyl-spin-layer\s*\{[\s\S]*?aspect-ratio:\s*1\s*\/\s*1[\s\S]*?border-radius:\s*50%[\s\S]*?translate3d\(0, 0, 0\)[\s\S]*?transform-origin:\s*center center[\s\S]*?backface-visibility:\s*hidden[\s\S]*?will-change:\s*transform/);
  assert.match(css, /@keyframes carineVinylSpin/);
  assert.match(css, /\.expanded-vinyl-wrap\.is-playing \.vinyl-spin-layer[\s\S]*?animation-play-state:\s*running/);
  assert.match(script, /requestAnimationFrame\(animateVinylRotation\)/);
  assert.match(script, /layer\.style\.transform\s*=\s*discTransform/);
  assert.match(script, /layer\.style\.webkitTransform\s*=\s*discTransform/);
  assert.match(script, /vinylDeceleration/);
  assert.match(script, /vinylVelocity\s*>\s*0/);
  assert.match(script, /syncVinylExperience\(false, 'ended'\)/);
  assert.match(css, /data-playback-state="playing"/);
  assert.match(css, /data-playback-state="paused"/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
});

test('iOS enables one requestAnimationFrame fallback only after CSS transform proof fails', () => {
  assert.match(script, /isIosSafari && !diagnostics\.transformChangesAcross1500msWhileAudioPlays/);
  assert.match(script, /vinylFallbackEnabled = true/);
  assert.match(script, /if \(vinylFallbackEnabled && !vinylAnimationFrame/);
  assert.match(script, /layer\.style\.animation = 'none'/);
});

test('iOS vinyl rotation recovers after WebKit lifecycle interruptions', () => {
  assert.match(script, /const restartVinylAnimation = \(\) =>/);
  assert.match(script, /cancelAnimationFrame\(vinylAnimationFrame\)/);
  assert.match(script, /document\.addEventListener\('visibilitychange', recoverVinylAfterLifecycleChange\)/);
  assert.match(script, /window\.addEventListener\('pageshow', recoverVinylAfterLifecycleChange\)/);
  assert.match(script, /window\.addEventListener\('orientationchange', recoverVinylAfterLifecycleChange\)/);
  assert.match(script, /document\.visibilityState !== 'visible'/);
  assert.match(script, /frameAge > 1500/);
});

test('iOS flattens the filtered 3D ancestor that can freeze child repaints', () => {
  assert.match(css, /html\.is-ios \.turntable-assembly \.console-turntable[\s\S]*?transform-style:\s*flat/);
  assert.match(css, /html\.is-ios \.turntable-assembly \.console-turntable[\s\S]*?filter:\s*none/);
  assert.match(css, /html\.is-ios \.turntable-assembly \.vinyl-spin-layer[\s\S]*?contain:\s*layout paint style/);
});

test('vinyl debug mode exposes required 0/500/1000/1500ms transform diagnostics', () => {
  assert.match(script, /const VINYL_DEBUG_QUERY_KEY = 'vinylDebug'/);
  assert.match(script, /const VINYL_DEBUG_STORAGE_KEY = 'carineVinylDebug'/);
  assert.match(script, /for \(const delay of \[0, 500, 1000, 1500\]\)/);
  assert.match(script, /visibleVinylSelector/);
  assert.match(script, /computedAnimationName/);
  assert.match(script, /computedAnimationPlayState/);
  assert.match(script, /transformChangesAcross1500msWhileAudioPlays/);
  assert.match(script, /window\.__carineVinylDiagnostics/);
});
