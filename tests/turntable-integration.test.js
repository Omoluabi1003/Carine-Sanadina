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

test('album artwork is large enough to read as the vinyl label', () => {
  assert.match(css, /\.direct-drive-deck \.expanded-vinyl-label,[\s\S]*?\.turntable-assembly \.expanded-vinyl-label\s*\{[\s\S]*?width:\s*72%[\s\S]*?max-width:\s*none[\s\S]*?padding:\s*0/);
  assert.match(css, /@media \(max-width:\s*640px\)[\s\S]*?\.turntable-assembly \.expanded-vinyl-label\s*\{\s*width:\s*76%/);
});

test('vinyl artwork fills its label without changing record geometry', () => {
  const finalArtworkRule = css.match(/\.turntable-assembly \.expanded-vinyl-label \.mobile-player-cover\s*\{([\s\S]*?)\}/)?.[1] || '';

  assert.match(finalArtworkRule, /width:\s*100%/);
  assert.match(finalArtworkRule, /height:\s*100%/);
  assert.match(finalArtworkRule, /max-width:\s*none/);
  assert.match(finalArtworkRule, /padding:\s*0/);
  assert.match(finalArtworkRule, /object-fit:\s*cover/);
  assert.match(css, /\.direct-drive-console \.expanded-vinyl-disc\s*\{[\s\S]*?width:\s*min\(52vw,\s*260px\)[\s\S]*?aspect-ratio:\s*1\s*\/\s*1/);
});

test('vinyl uses the master adaptive frame engine and maps tonearm playback states', () => {
  assert.match(script, /renderVinylEngineFrame = \(frameTime\) =>/);
  assert.match(script, /renderVinylEngineFrame\(time\)/);
  assert.match(script, /disc\.style\.transform\s*=\s*discTransform/);
  assert.match(script, /disc\.style\.webkitTransform\s*=\s*discTransform/);
  assert.match(css, /-webkit-transform:\s*translate3d\(0, 0, 4px\) rotateZ\(var\(--vinyl-rotation\)\)/);
  assert.match(script, /33 \+ \(1 \/ 3\)\) \* 360 \/ 60/);
  assert.match(script, /vinylVelocity\s*>\s*0/);
  assert.match(script, /syncVinylExperience\(false, 'ended'\)/);
  assert.match(css, /data-playback-state="playing"/);
  assert.match(css, /data-playback-state="paused"/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
});

test('playback owns a shared 33 1/3 RPM frame loop and pause preserves its angle', () => {
  assert.match(script, /vinylVelocity = targetVelocity/);
  assert.match(script, /const actuallyPlaying = Boolean\(audio && !audio\.paused && !audio\.ended && audio\.readyState >= 2\)/);
  assert.match(script, /visualizerController\?\.ensureFrameLoop\(\)/);
  assert.doesNotMatch(script, /requestAnimationFrame\(animateVinylRotation\)/);
  assert.match(script, /if \(!shouldRotate\) vinylVelocity = 0/);
  assert.doesNotMatch(script, /if \(!shouldRotate\) \{[\s\S]*?vinylRotation = 0/);
  assert.doesNotMatch(script, /mobileFrameInterval/);
});

test('universal media engine is gesture initialized, idempotent, and analyser independent', () => {
  assert.match(script, /async function initializeMediaEngine/);
  assert.match(script, /\['pointerdown', 'touchstart', 'click'\]/);
  assert.match(script, /mediaEngineInitialization/);
  assert.match(script, /mediaSourceNodes = new WeakMap\(\)/);
  assert.match(script, /this\.analyser\.fftSize = 2048/);
  assert.match(script, /this\.analyser\.smoothingTimeConstant = 0\.82/);
  assert.match(script, /preload="metadata"[^>]*playsinline webkit-playsinline/);
  assert.match(css, /@keyframes vinylSpin/);
  assert.match(css, /vinyl-css-fallback[\s\S]*?1\.8s linear infinite/);
});

test('iOS keeps the shared frame engine as the sole vinyl transform owner', () => {
  assert.doesNotMatch(script, /useCssVinylAnimation/);
  assert.doesNotMatch(script, /verifyIosVinylAnimation/);
  assert.match(script, /translate3d\(0, 0, 4px\) rotateZ/);
  assert.doesNotMatch(script, /4\.001px/);
  assert.match(script, /disc\.style\.transform\s*=\s*discTransform/);
  assert.match(script, /disc\.style\.webkitTransform\s*=\s*discTransform/);
  assert.match(css, /html\.is-ios \.turntable-assembly \.expanded-vinyl-disc[\s\S]*?-webkit-animation:\s*none !important/);
});

test('iOS vinyl rotation recovers after WebKit lifecycle interruptions', () => {
  assert.match(script, /const restartVinylAnimation = \(\) =>/);
  assert.match(script, /visualizerController\?\.recover\(\)/);
  assert.match(script, /document\.addEventListener\('visibilitychange', recoverVinylAfterLifecycleChange\)/);
  assert.match(script, /window\.addEventListener\('pageshow', recoverVinylAfterLifecycleChange\)/);
  assert.match(script, /window\.addEventListener\('orientationchange', recoverVinylAfterLifecycleChange\)/);
  assert.match(script, /document\.visibilityState !== 'visible'/);
  assert.match(script, /frameAge > 1500/);
});

test('iOS flattens the filtered 3D ancestor that can freeze child repaints', () => {
  assert.match(css, /html\.is-ios \.turntable-assembly \.console-turntable[\s\S]*?transform-style:\s*flat/);
  assert.match(css, /html\.is-ios \.turntable-assembly \.console-turntable[\s\S]*?filter:\s*none/);
  assert.match(css, /html\.is-ios \.turntable-assembly \.expanded-vinyl-disc[\s\S]*?contain:\s*layout paint style/);
});

test('audiophile belt-drive is the default turntable', () => {
  assert.match(html, /<option value="audiophile"[^>]*selected>Audiophile Belt-Drive<\/option>/);
  assert.match(script, /let saved = 'audiophile'/);
});

test('track artwork invalidates composited WebKit layers when a track changes', () => {
  assert.match(script, /const syncArtworkSource = \(image, source, trackId = ''\) =>/);
  assert.match(script, /image\.dataset\.artworkRevision = revision/);
  assert.match(script, /image\.getBoundingClientRect\(\)/);
  assert.match(script, /syncArtworkSource\(mobileCover, player\.dataset\.trackCover/);
  assert.match(script, /syncArtworkSource\(mini\.cover, player\.dataset\.trackCover/);
  assert.match(css, /\.mobile-player-cover\.is-artwork-refreshing/);
});

test('featured reflections retain a legible editorial text palette', () => {
  assert.match(css, /\.reflections \.reflection-card blockquote\s*\{[\s\S]*?color:\s*#291b18/);
  assert.match(css, /\.reflections \.reflection-prompt strong,[\s\S]*?color:\s*#612237/);
  assert.match(css, /\.reflections \.reflection-card__meta,[\s\S]*?color:\s*#674f47/);
});
