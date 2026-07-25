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

const createI18nContext = () => {
  const translationsStart = script.indexOf('const translations = {}');
  const supportedLanguagesStart = script.indexOf('const supportedLanguages');
  const auditStart = script.indexOf('const TRANSLATION_AUDIT_ALLOWED_TEXT');
  const auditEnd = script.indexOf('const getAuditSelector');
  assert.notEqual(translationsStart, -1);
  assert.notEqual(supportedLanguagesStart, -1);
  assert.notEqual(auditStart, -1);
  assert.notEqual(auditEnd, -1);
  const warnings = [];
  const context = {
    window: {
      console: {
        groupCollapsed() {},
        groupEnd() {},
        info() {},
        table() {},
        warn(...args) { warnings.push(args); }
      }
    },
    console: { warn(...args) { warnings.push(args); } }
  };
  vm.createContext(context);
  vm.runInContext(`
    const DEFAULT_LANGUAGE = 'en';
    ${script.slice(translationsStart, supportedLanguagesStart)}
    const supportedLanguages = ['en', 'fr', 'ln', 'es', 'sw', 'yo', 'de', 'ar', 'zh-CN'];
    let currentLanguage = DEFAULT_LANGUAGE;
    ${script.slice(auditStart, auditEnd)}
    this.translations = translations;
    this.mergeTranslationAdditions = mergeTranslationAdditions;
    this.listMissingTranslations = listMissingTranslations;
    this.auditEnglishDictionary = auditEnglishDictionary;
  `, context);
  context.warnings = warnings;
  return context;
};

const readTranslations = () => createI18nContext().translations;

test('every supported language contains every English translation key', () => {
  const translations = readTranslations();
  const expectedLanguages = ['en', 'fr', 'ln', 'es', 'sw', 'yo', 'de', 'ar', 'zh-CN'];
  assert.deepEqual(Object.keys(translations).sort(), expectedLanguages.sort());
  const englishKeys = Object.keys(translations.en);
  for (const language of expectedLanguages) {
    const missing = englishKeys.filter((key) => !(key in translations[language]) || translations[language][key] === '');
    const extra = Object.keys(translations[language]).filter((key) => !(key in translations.en));
    assert.deepEqual(missing, [], `${language} is missing translations: ${missing.join(', ')}`);
    assert.deepEqual(extra, [], `${language} has extra translations: ${extra.join(', ')}`);
  }
});

test('professional credential is factual, accessible, localized, and presented without certificate media', () => {
  const translations = readTranslations();
  const credentialSection = indexHtml.match(/<section class="credentials"[\s\S]*?<\/section>/)?.[0] || '';

  assert.match(credentialSection, /Professional Credentials/);
  assert.match(credentialSection, /Certificate of Completion/);
  assert.match(credentialSection, /Florida Community College at Jacksonville/);
  assert.match(credentialSection, /datetime="2009-06-22"/);
  assert.match(credentialSection, /role="list"/);
  assert.doesNotMatch(credentialSection, /<img|<picture|<iframe|\.pdf|duration|licensed|certified domestic violence/i);
  assert.match(indexHtml, /"@type": "EducationalOccupationalCredential"/);

  const credentialKeys = Object.keys(translations.en).filter((key) => key.startsWith('credentials.'));
  assert.equal(credentialKeys.length, 8);
  for (const [language, dictionary] of Object.entries(translations)) {
    const missing = credentialKeys.filter((key) => typeof dictionary[key] !== 'string' || dictionary[key] === '');
    assert.deepEqual(missing, [], `${language} is missing credential translations: ${missing.join(', ')}`);
  }
});

test('developer presence remains visible, secondary, and localized in every supported language', () => {
  const translations = readTranslations();
  assert.match(indexHtml, /class="footer-developer-credit"/);
  assert.match(indexHtml, /https:\/\/etl-gis-consulting-llc\.vercel\.app/);
  assert.match(indexHtml, /class="developer-inquiry"/);
  assert.match(indexHtml, /mailto:etlgisconsulting@outlook\.com/);
  assert.match(indexHtml, /tel:\+17726773590/);
  assert.match(legalHtml, /data-i18n="legal\.developer\.body"/);
  assert.doesNotMatch(indexHtml.match(/<section[^>]+id="hero"[\s\S]*?<\/section>/)?.[0] || '', /ETL GIS Consulting LLC/);

  const requiredKeys = [
    'developer.inquiryLabel',
    'developer.inquiryText',
    'footer.developerCredit',
    'legal.developer.title',
    'legal.developer.body'
  ];
  for (const [language, dictionary] of Object.entries(translations)) {
    const missing = requiredKeys.filter((key) => typeof dictionary[key] !== 'string' || dictionary[key] === '');
    assert.deepEqual(missing, [], `${language} is missing developer-presence translations: ${missing.join(', ')}`);
    assert.match(dictionary['developer.inquiryText'], /ETL GIS Consulting LLC/, `${language} omits ETL from the developer inquiry`);
    assert.match(dictionary['legal.developer.body'], /ETL GIS Consulting LLC/, `${language} omits ETL from the legal clarification`);
  }
});

test('English dictionary is clean and the contamination audit catches known scripts and terms', () => {
  const context = createI18nContext();
  const cleanReport = context.auditEnglishDictionary();
  assert.equal(cleanReport.warnings.length, 0);
  assert.equal(context.translations.en['tracks.paranoia.playLabel'], 'Play Paranoïa Persécutive');
  assert.equal(context.translations.yo['tracks.paranoia.playLabel'], 'Mu Paranoïa Persécutive ṣiṣẹ́');

  const contaminatedReport = context.auditEnglishDictionary({
    yoruba: 'Mu orin ṣiṣẹ́ láti ọwọ́ Carine',
    arabic: 'تشغيل',
    chinese: '播放'
  });
  assert.equal(contaminatedReport.warnings.some(({ type }) => type === 'Yoruba term'), true);
  assert.equal(contaminatedReport.warnings.some(({ type }) => type === 'Arabic script'), true);
  assert.equal(contaminatedReport.warnings.some(({ type }) => type === 'Chinese character'), true);
});

test('safe translation merge skips unknown languages and invalid dictionaries without throwing', () => {
  const context = createI18nContext();
  const report = context.mergeTranslationAdditions({ xx: { greeting: 'Hello' }, fr: null }, 'test additions');
  assert.deepEqual([...report.merged], []);
  assert.deepEqual([...report.skippedUnknownLanguages], ['xx']);
  assert.deepEqual([...report.skippedInvalidDictionaries], ['fr']);
  assert.equal(context.warnings.length >= 2, true);
});

test('missing translation diagnostics safely report absent dictionaries, extra keys, and totals', () => {
  const context = createI18nContext();
  delete context.translations.de;
  context.translations.fr['test.extra'] = 'supplémentaire';
  const report = context.listMissingTranslations();
  assert.equal(report.de.dictionaryExists, false);
  assert.equal(report.de.missing.length, report.de.englishKeyCount);
  assert.deepEqual([...report.fr.extra], ['test.extra']);
  assert.equal(report.en.totalKeys, report.en.englishKeyCount);
});

test('recent dynamic features have translation keys in every supported language', () => {
  const translations = readTranslations();
  const requiredKeys = [
    'videos.title', 'videos.subtitle', 'videos.openDrawer', 'videos.watch', 'videos.close', 'videos.openOnYouTube',
    'videos.channel', 'videos.moreComingSoon', 'videos.unavailable', 'videos.loading', 'music.playlist',
    'music.playlistLabel', 'music.time', 'music.duration', 'playlist.close', 'playlist.nowPlaying',
    'playlist.selectTrack', 'player.expand', 'player.collapse', 'player.nowPlaying', 'player.ready',
    'player.playing', 'player.paused', 'player.previous', 'player.next', 'player.shuffle', 'player.repeatOff',
    'player.repeatAll', 'player.repeatOne', 'lyrics.label', 'lyrics.expand', 'lyrics.collapse', 'lyrics.loading',
    'lyrics.unavailable', 'lyrics.syncedComingSoon', 'lyrics.staticLyrics', 'lyrics.noLyricsForTrack',
    'guide.launcher', 'guide.title', 'guide.placeholder', 'guide.send', 'guide.close', 'guide.suggestions',
    'guide.fallback', 'guide.booking', 'install.title', 'install.body', 'install.button', 'install.later',
    'install.iosInstruction', 'install.alreadyInstalled'
  ];
  for (const [language, dictionary] of Object.entries(translations)) {
    const missing = requiredKeys.filter((key) => !(key in dictionary) || dictionary[key] === '');
    assert.deepEqual(missing, [], `${language} is missing recent-feature translations: ${missing.join(', ')}`);
  }
});

test('dynamic translation pipeline exposes diagnostics and refresh hooks', () => {
  for (const contract of [
    'window.auditTranslations = auditTranslations',
    'window.listMissingTranslations = listMissingTranslations',
    'window.auditEnglishDictionary = auditEnglishDictionary',
    'window.refreshLocalizedUI = refreshLocalizedUI',
    'window.forceTranslateApp = () =>',
    "window.dispatchEvent(new CustomEvent('carine:languagechange'",
    'const refreshLocalizedUI = (language = currentLanguage) =>',
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
