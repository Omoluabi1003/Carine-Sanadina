const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const indexHtml = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const script = fs.readFileSync(path.join(root, 'script.js'), 'utf8');
const styles = fs.readFileSync(path.join(root, 'styles.css'), 'utf8');

test('press placeholder is replaced by an accessible media kit trigger and drawer', () => {
  assert.doesNotMatch(indexHtml, /class="press-placeholder"/);
  assert.match(indexHtml, /data-media-kit-trigger/);
  assert.match(indexHtml, /data-i18n="mediaKit\.downloadButton"/);
  assert.match(indexHtml, /data-media-kit-drawer[^>]+role="dialog"[^>]+aria-modal="true"/);
  assert.match(indexHtml, /data-media-kit-content/);
  assert.match(indexHtml, /data-i18n="mediaKit\.legalNotice"/);
});

test('media kit assets are centralized and URL-only', () => {
  assert.match(script, /const mediaKitAssets = \[/);
  assert.match(script, /MEDIA_KIT_RAW_BASE/);
  assert.doesNotMatch(script, /data:(?:audio|image|application)\//i);
  assert.match(script, /download="\$\{escapeVideoText\(getMediaKitFilename\(asset\)\)\}"/);
  assert.match(script, /target="_blank" rel="noopener noreferrer"/);
  assert.match(script, /window\.mediaKitAssets = mediaKitAssets/);
});

test('media kit supports desktop modal and mobile bottom-sheet scrolling', () => {
  assert.match(styles, /\.media-kit-drawer__body\s*\{[^}]*overflow-y:\s*auto/s);
  assert.match(styles, /@media \(max-width: 760px\)[\s\S]*?\.media-kit-drawer\s*\{[^}]*align-items:\s*end/s);
  assert.match(styles, /body\.media-kit-open/);
});

test('every required media kit translation key is defined', () => {
  const requiredKeys = [
    'mediaKit.downloadButton', 'mediaKit.title', 'mediaKit.description', 'mediaKit.music',
    'mediaKit.portraits', 'mediaKit.press', 'mediaKit.books', 'mediaKit.download',
    'mediaKit.usageNotice', 'mediaKit.noAssets', 'mediaKit.close'
  ];
  for (const key of requiredKeys) {
    assert.match(script, new RegExp(`'${key.replace('.', '\\.')}'`), `Missing ${key}`);
  }
});
