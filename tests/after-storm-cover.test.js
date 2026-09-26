const test = require('node:test');
const assert = require('node:assert/strict');
const { existsSync, readFileSync } = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const approvedCover = 'f1b44262-8401-4cb3-a995-08788a969a55.jpeg';
const approvedCoverUrl = `https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/${approvedCover}`;
const approvedPurchaseUrl = 'https://a.co/d/02rwYihN';
const indexHtml = readFileSync(path.join(root, 'index.html'), 'utf8');
const reflectionMetadata = readFileSync(path.join(root, 'content-reflections.js'), 'utf8');
const script = readFileSync(path.join(root, 'script.js'), 'utf8');
const serviceWorker = readFileSync(path.join(root, 'sw.js'), 'utf8');

const countOccurrences = (contents, value) => contents.split(value).length - 1;

test('After The Storm uses the approved cover in visible and structured website content', () => {
  assert.equal(countOccurrences(indexHtml, approvedCoverUrl), 3);
  assert.equal(countOccurrences(reflectionMetadata, approvedCoverUrl), 1);
  assert.equal(existsSync(path.join(root, approvedCover)), true);
});

test('After The Storm uses only the approved purchase destination', () => {
  assert.equal(countOccurrences(indexHtml, approvedPurchaseUrl), 3);
  assert.doesNotMatch(indexHtml, /amazon\.com\/s\?k=After\+The\+Storm\+Carine\+Sanadina/);
  assert.match(indexHtml, new RegExp(`href="${approvedPurchaseUrl}"[\\s\\S]*?target="_blank"[\\s\\S]*?rel="noopener noreferrer"`));
});

test('app and service-worker cache versions are aligned for the current rollout', () => {
  const expectedVersion = script.match(/const APP_VERSION = '([^']+)'/)?.[1];
  assert.ok(expectedVersion);
  assert.match(script, new RegExp(`const APP_VERSION = '${expectedVersion}'`));
  assert.match(serviceWorker, new RegExp(`const APP_VERSION = '${expectedVersion}'`));
  assert.match(serviceWorker, /const CACHE_VERSION = `carine-static-v\d+-\$\{APP_VERSION\}`/);
});
