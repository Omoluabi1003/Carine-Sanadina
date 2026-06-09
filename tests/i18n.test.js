const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const script = fs.readFileSync(path.join(root, 'script.js'), 'utf8');
const indexHtml = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const legalHtml = fs.readFileSync(path.join(root, 'legal/index.html'), 'utf8');
const styles = fs.readFileSync(path.join(root, 'styles.css'), 'utf8');

const readTranslations = () => {
  const start = script.indexOf('const translations = {}');
  const end = script.indexOf('const supportedLanguages');
  assert.notEqual(start, -1);
  assert.notEqual(end, -1);
  const context = {};
  vm.createContext(context);
  vm.runInContext(`const DEFAULT_LANGUAGE = 'en';\n${script.slice(start, end)}\nthis.translations = translations;`, context);
  return context.translations;
};

test('every supported language contains every English translation key', () => {
  const translations = readTranslations();
  const expectedLanguages = ['en', 'fr', 'ln', 'es', 'sw', 'yo', 'de', 'ar', 'zh-CN'];
  assert.deepEqual(Object.keys(translations).sort(), expectedLanguages.sort());
  const englishKeys = Object.keys(translations.en);
  for (const language of expectedLanguages) {
    const missing = englishKeys.filter((key) => !(key in translations[language]) || translations[language][key] === '');
    assert.deepEqual(missing, [], `${language} is missing translations: ${missing.join(', ')}`);
  }
});

test('dynamic translation pipeline exposes diagnostics and refresh hooks', () => {
  for (const contract of [
    'window.auditTranslations = auditTranslations',
    'window.listMissingTranslations = listMissingTranslations',
    'window.forceTranslateApp = () =>',
    "window.dispatchEvent(new CustomEvent('carine:languagechange'",
    'refreshPlaylistTranslationData();',
    "document.documentElement.classList.toggle('is-rtl', nextLanguage === 'ar')"
  ]) {
    assert.match(script, new RegExp(contract.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }
});

test('static user-facing attributes use translation keys', () => {
  const documents = [indexHtml, legalHtml];
  const checks = [
    ['aria-label', 'data-i18n-aria-label'],
    ['placeholder', 'data-i18n-placeholder'],
    ['title', '(?:data-i18n-title|data-i18n-title-template)'],
    ['alt', 'data-i18n-alt']
  ];
  for (const html of documents) {
    for (const [attribute, translationAttribute] of checks) {
      const tagPattern = new RegExp(`<[^>]+${attribute}="[^"]*[A-Za-zÀ-ÿ][^"]*"[^>]*>`, 'g');
      for (const tag of html.match(tagPattern) || []) {
        assert.match(tag, new RegExp(`${translationAttribute}="[^"]+"`), `Missing ${translationAttribute}: ${tag}`);
      }
    }
  }
});

test('generated chatbot and YouTube copy is translated and CSS has no English pseudo-label', () => {
  assert.doesNotMatch(script, /booking:\s*'You may use the contact/);
  assert.match(script, /data-guide-response-key/);
  assert.match(script, /translate\('videos\.cardDescription'\)/);
  assert.match(script, /translateTemplate\('videos\.iframeTitle'/);
  assert.doesNotMatch(styles, /content:\s*["']Ask Guide["']/);
});

test('all language selectors offer the complete supported language set', () => {
  const expected = ['en', 'fr', 'ln', 'es', 'sw', 'yo', 'de', 'ar', 'zh-CN'];
  for (const [name, html] of [['home', indexHtml], ['legal', legalHtml]]) {
    const found = [...html.matchAll(/data-language-option="([^"]+)"/g)].map((match) => match[1]);
    assert.deepEqual(found, expected, `${name} language selector is incomplete`);
  }
});
