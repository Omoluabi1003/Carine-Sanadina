const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Quality = require('../studio/lib/content-quality.js');
const Studio = require('../studio/lib/studio-core.js');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'studio/index.html'), 'utf8');
const app = fs.readFileSync(path.join(root, 'studio/app.js'), 'utf8');

test('creation path selector exposes all seven tailored workflows', () => {
  assert.equal(Studio.CREATION_PATHS.length, 7);
  assert.deepEqual(Studio.CREATION_PATHS.map(({ id }) => id), [
    'idea', 'nonfiction', 'fiction', 'upload', 'screenplay', 'publishing_pack', 'movie_pitch_pack'
  ]);
  assert.match(app, /Studio\.CREATION_PATHS\.map/);
});

test('expanded format catalog includes fiction, nonfiction, and special outputs', () => {
  assert.ok(Studio.BOOK_TYPES.nonfiction.includes('Government Modernization'));
  assert.ok(Studio.BOOK_TYPES.fiction.includes('Speculative Fiction'));
  assert.ok(Studio.BOOK_TYPES.special.includes('TV Pilot'));
  assert.equal(Studio.BOOK_TYPES.nonfiction.length, 18);
  assert.equal(Studio.BOOK_TYPES.fiction.length, 18);
  assert.equal(Studio.BOOK_TYPES.special.length, 16);
});

test('anti-padding engine detects forbidden phrase families and repeated templates', () => {
  const repeated = 'The governing question is how the thesis becomes visible in relation to operating reality.';
  const report = Quality.analyzeChapter(Array(7).fill(repeated).join(' '), { targetWords: 20 });
  assert.equal(report.paddingDetected, true);
  assert.equal(report.passed, false);
  assert.ok(report.phraseFamilies.some(({ phrase, occurrences }) => phrase === 'in relation to operating reality' && occurrences === 7));
  assert.ok(report.sentenceFamilies.length > 0);
  assert.equal(report.status, 'failed_quality_review');
});

test('clean word count excludes duplicate and prompt-leakage content', () => {
  const duplicate = 'A field team tested the map with residents and changed the workflow after observing three avoidable delays.';
  const content = `${duplicate} ${duplicate}\n\nBook DNA: repeat the internal generation rules.`;
  const report = Quality.analyzeChapter(content);
  assert.ok(report.rawWords > report.cleanWords);
  assert.equal(report.leakageDetected, true);
  assert.ok(report.leakageFlags.includes('Book DNA'));
});

test('prompt leakage repair removes scaffold paragraphs before save', () => {
  const content = 'A useful opening grounded in a real decision.\n\nCover direction: show a robot.\n\nThe team learned by testing a bounded change.';
  const repaired = Quality.repairLeakage(content);
  assert.doesNotMatch(repaired, /cover direction/i);
  assert.match(repaired, /bounded change/);
});

test('uploaded manuscript stores immutable original separately and detects chapters', () => {
  const originalText = 'A Working Title\n\nChapter 1 First Signal\nOriginal prose.\n\nChapter 2 Consequence\nMore prose.';
  const project = Studio.createProject({ projectType: 'upload', originalText, fileName: 'draft.txt', fileType: 'txt' });
  assert.equal(project.uploadedManuscript.originalText, originalText);
  assert.equal(project.uploadedManuscript.improvedText, '');
  assert.equal(project.uploadedManuscript.detectedStructure.chapterCount, 2);
});

test('fiction projects create a story bible placeholder', () => {
  const project = Studio.createProject({ projectType: 'fiction', title: 'North Star' });
  assert.ok(project.book.storyBible);
  assert.deepEqual(project.book.storyBible.characters, []);
  assert.deepEqual(project.book.storyBible.sceneCards, []);
});

test('screen adaptation creates logline and beat sheet placeholders', () => {
  const project = Studio.createProject({ projectType: 'screenplay', title: 'The Clarity Loop' });
  const adaptation = Studio.buildAdaptationPlaceholder(project);
  assert.match(adaptation.logline, /The Clarity Loop/);
  assert.equal(adaptation.beatSheet.length, 10);
  assert.ok(adaptation.runtimeEstimate > 0);
});

test('designed placeholder cover includes title, subtitle, and author as an asset', () => {
  const project = Studio.createProject({ projectType: 'nonfiction', title: 'The Clarity Loop', subtitle: 'Modern Workflows and AI', authorName: 'Paul A.K. Iyogun' });
  const cover = Studio.createCoverAsset(project);
  assert.match(cover.coverSvg, /The Clarity/);
  assert.match(cover.coverSvg, /Modern Workflows/);
  assert.match(cover.coverSvg, /PAUL A\.K\. IYOGUN/);
  assert.equal(cover.coverStatus, 'placeholder_ready');
  assert.ok(cover.coverQualityScore >= 75);
  assert.doesNotMatch(cover.coverSvg, /cover direction/i);
});

test('publishing gate requires a quality cover and clean chapter content', () => {
  const project = Studio.createProject({ projectType: 'nonfiction', title: 'A Real Book', authorName: 'Author', targetPages: 1, wordsPerPage: 10, chapterCount: 1 });
  project.book.chapters = [{ title: 'One', targetWordCount: 10, content: 'A distinct chapter explains a practical choice through evidence, consequence, reflection, and a clear next step.' }];
  let readiness = Studio.publishingReadiness(project);
  assert.equal(readiness.checks.cover, false);
  assert.equal(readiness.status, 'needs_cover');
  project.coverAsset = Studio.createCoverAsset(project);
  readiness = Studio.publishingReadiness(project);
  assert.equal(readiness.checks.cover, true);
  assert.equal(readiness.status, 'ready_for_export');
});

test('dashboard exposes soft-delete, duplication, cover, quality, and readiness controls', () => {
  for (const contract of ['data-delete', 'data-duplicate', 'data-adapt', 'Cover', 'Readiness', 'Quality']) assert.match(app, new RegExp(contract));
  const project = Studio.createProject({ title: 'Temporary draft' });
  Studio.softDelete(project);
  assert.equal(project.status, 'deleted');
  assert.ok(project.deletedAt);
});

test('studio shell includes every required navigation destination', () => {
  for (const destination of ['Dashboard', 'Create', 'Book Studio', 'Manuscript Review', 'Fiction Studio', 'Adaptation Studio', 'Cover Studio', 'Publishing Center', 'Exports']) assert.match(html, new RegExp(destination));
});
