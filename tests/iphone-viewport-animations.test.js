const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(root, 'styles.css'), 'utf8');
const script = fs.readFileSync(path.join(root, 'script.js'), 'utf8');

test('iPhone safe-area and dynamic viewport sizing are enabled', () => {
  assert.match(html, /viewport-fit=cover/);
  assert.match(css, /\.hero\s*\{[\s\S]*?min-height:\s*100dvh/);
  assert.match(css, /\.cinematic-splash\s*\{[\s\S]*?height:\s*100dvh/);
  assert.match(css, /env\(safe-area-inset-top\)/);
});

test('compact viewport reveals use an early observer and iOS lifecycle refreshes', () => {
  assert.match(script, /compactViewportQuery\.matches\s*\?\s*\{ threshold: 0\.01, rootMargin: '0px 0px 12% 0px' \}/);
  assert.match(script, /window\.addEventListener\('carine:splashcomplete', scheduleRevealRefresh\)/);
  assert.match(script, /window\.addEventListener\('pageshow', scheduleRevealRefresh\)/);
  assert.match(script, /window\.visualViewport\?\.addEventListener\('resize', scheduleRevealRefresh/);
});

test('mobile reveal transitions are compositor-friendly and reduced-motion safe', () => {
  assert.match(css, /\.reveal\s*\{[\s\S]*?translate3d\(0, 28px, 0\)/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)[\s\S]*?\.reveal,[\s\S]*?opacity:\s*1;[\s\S]*?transition:\s*none/);
});
