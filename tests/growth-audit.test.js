const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const indexHtml = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const script = fs.readFileSync(path.join(root, 'script.js'), 'utf8');
const buildScript = fs.readFileSync(path.join(root, 'scripts/build.js'), 'utf8');
const requiredTracks = ['Consolation', 'La Gentillesse', 'Wonderful', 'Womanifesto', 'Paranoïa Persécutive', 'Reason', 'Halleluyah'];

test('public conversion surfaces contain no fake contact or structured-data placeholders', () => {
  assert.doesNotMatch(indexHtml, /hello@example\.com|ISBN placeholder|Publisher to be confirmed|More videos coming soon/i);
  assert.match(indexHtml, /data-contact-intent="speaking"[^>]+href="sms:\+17726773590/);
  assert.match(indexHtml, /data-contact-intent="call"[^>]+href="tel:\+17726773590"/);
  assert.match(indexHtml, /data-i18n="audience\.heading"/);
});

test('structured data includes all growth entity types and remains valid JSON', () => {
  const match = indexHtml.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  assert.ok(match);
  const schema = JSON.parse(match[1]);
  const types = schema['@graph'].flatMap((item) => Array.isArray(item['@type']) ? item['@type'] : [item['@type']]);
  for (const type of ['Person', 'Organization', 'Book', 'MusicRecording', 'VideoObject']) assert.ok(types.includes(type), type);
  assert.equal(schema['@graph'].filter((item) => item['@type'] === 'MusicRecording').length, 7);
  assert.equal(schema['@graph'].filter((item) => item['@type'] === 'VideoObject').length, 4);
});

test('every localized press music list names the complete seven-track catalog', () => {
  const start = script.indexOf('const translations = {}');
  const end = script.indexOf('const supportedLanguages');
  const context = { window: { console }, console };
  vm.createContext(context);
  vm.runInContext(`const DEFAULT_LANGUAGE = 'en'; ${script.slice(start, end)}; this.translations = translations;`, context);
  for (const [language, dictionary] of Object.entries(context.translations)) {
    const list = dictionary['press.music.body'];
    for (const track of requiredTracks) assert.match(list, new RegExp(track), `${language} is missing ${track}`);
  }
});

test('press downloads are real hosted text assets and ship in production output', () => {
  for (const file of ['carine-sanadina-press-bio.txt', 'carine-sanadina-speaker-topics.txt']) {
    assert.ok(fs.existsSync(path.join(root, 'media', file)));
    assert.match(script, new RegExp(`https://raw\\.githubusercontent\\.com|MEDIA_KIT_RAW_BASE`));
  }
  assert.match(script, /category: 'press'.+fileType: 'TXT'/);
  assert.match(script, /data-media-kit-download/);
  assert.match(buildScript, /copyStaticDirectory\('media'\)/);
});

test('growth analytics cover the required conversion events', () => {
  for (const eventName of ['book_click', 'music_play_click', 'video_open', 'media_kit_download', 'contact_click']) {
    assert.match(script, new RegExp(`['"]${eventName}['"]`), eventName);
  }
  assert.match(script, /window\.dataLayer\.push\(payload\)/);
  assert.match(script, /new CustomEvent\('carine:analytics'/);
});
