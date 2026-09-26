const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const script = fs.readFileSync(path.join(root, 'script.js'), 'utf8');
const platform = fs.readFileSync(path.join(root, 'content-platform.js'), 'utf8');
const build = fs.readFileSync(path.join(root, 'scripts/build.js'), 'utf8');
const worker = fs.readFileSync(path.join(root, 'sw.js'), 'utf8');

const trackIds = ['consolation', 'gentillesse', 'wonderful', 'womanifesto', 'paranoia-persecutive', 'reason', 'halleluyah', 'hosanna', 'matondo'];

test('normalized platform metadata references only the existing catalog', () => {
  for (const id of trackIds) {
    assert.match(script, new RegExp(`id: '${id}'`));
    assert.match(platform, new RegExp(`'${id}'`));
  }
  assert.match(platform, /window\.CarineContent = catalog/);
  assert.match(platform, /window\.reflectionArticles/);
  assert.doesNotMatch(platform, /new Audio|AudioContext|createMediaElementSource/);
});

test('studio routes use query deep links and preserve the existing audio element', () => {
  assert.match(html, /data-studio-view/);
  assert.match(platform, /searchParams\.set\('track', track\.slug\)/);
  assert.match(platform, /addEventListener\('popstate'/);
  assert.match(platform, /carine:selecttrack/);
  assert.match(script, /setActiveTrack\(requestedPlayer\)/);
  assert.doesNotMatch(script.slice(script.indexOf("window.addEventListener('carine:selecttrack'"), script.indexOf('restorePlayerStateWithoutAutoplay();')), /new Audio|createElement\(['"]audio/);
});

test('healing recommendations are deterministic and bounded to four existing types', () => {
  assert.match(platform, /return \[pick\(books, themes\), pick\(tracks, themes\), pick\(reflections, themes\)/);
  assert.match(platform, /const labels = \['Read', 'Listen', 'Reflect', 'Connect'\]/);
  assert.match(html, /data-healing-topic="encouragement"/);
  assert.match(html, /data-healing-topic="speaking"/);
});

test('analytics allowlists events and properties and silently isolates providers', () => {
  assert.match(platform, /const allowedEvents = new Set/);
  assert.match(platform, /const allowedProperties = new Set/);
  assert.match(platform, /this\.provider\?\.track\(name, safe\)/);
  assert.doesNotMatch(platform, /allowedProperties[^;]+email|allowedProperties[^;]+phone|allowedProperties[^;]+message/);
});

test('newsletter prevents reload and remains disabled without a configured endpoint', () => {
  assert.match(html, /data-circle-form/);
  assert.match(platform, /event\.preventDefault\(\); if \(!endpoint\) return/);
  assert.match(platform, /button\[type="submit"\]'\)\.disabled = true/);
  assert.doesNotMatch(platform, /api[_-]?key|secret[_-]?key/i);
});

test('new enhancement is included in production hashing and offline shell', () => {
  assert.match(build, /'content-platform\.js'/);
  assert.match(worker, /'\.\/content-platform\.js'/);
  assert.match(html, /<script src="content-platform\.js" defer><\/script>/);
});
