const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const styles = fs.readFileSync(path.resolve(__dirname, '..', 'styles.css'), 'utf8');

const luminance = (hex) => {
  const channels = hex.match(/[\da-f]{2}/gi).map((value) => parseInt(value, 16) / 255);
  const linear = channels.map((value) => (
    value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
  ));
  return (0.2126 * linear[0]) + (0.7152 * linear[1]) + (0.0722 * linear[2]);
};

const contrast = (foreground, background) => {
  const lighter = Math.max(luminance(foreground), luminance(background));
  const darker = Math.min(luminance(foreground), luminance(background));
  return (lighter + 0.05) / (darker + 0.05);
};

test('site uses blue fallback colors underneath its decorative background images', () => {
  assert.match(styles, /--accessible-blue:\s*#061b3f/);
  assert.match(styles, /background-color:\s*var\(--accessible-blue\)/);
  assert.match(styles, /body\s*\{[^}]*background-image:\s*[\s\S]*?linear-gradient/s);
  assert.match(styles, /main > \.section[\s\S]*?background-image:/);
});

test('primary and secondary text colors exceed WCAG AA contrast on blue surfaces', () => {
  assert.ok(contrast('#ffffff', '#061b3f') >= 7, 'Primary text should meet enhanced contrast');
  assert.ok(contrast('#dbeafe', '#061b3f') >= 7, 'Secondary text should meet enhanced contrast');
  assert.ok(contrast('#dbeafe', '#0b2f68') >= 4.5, 'Card text should meet normal-text contrast');
});

test('high-contrast preference removes decorative imagery and maximizes text contrast', () => {
  assert.match(styles, /@media \(prefers-contrast: more\)[\s\S]*?--muted:\s*#ffffff/);
  assert.match(styles, /@media \(prefers-contrast: more\)[\s\S]*?body\s*\{\s*background-image:\s*none;/);
});
