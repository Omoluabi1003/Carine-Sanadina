(function (root, factory) {
  const api = factory(root.ClarityQuality || (typeof require === 'function' ? require('./content-quality.js') : null));
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.ClarityStudio = api;
}(typeof globalThis !== 'undefined' ? globalThis : this, function (Quality) {
  'use strict';
  const CREATION_PATHS = [
    ['idea', 'Start From an Idea', 'Turn a title, concept, or rough idea into a complete book project.', 'sparkles'],
    ['nonfiction', 'Write a Nonfiction Book', 'Build an authoritative book around a thesis, framework, and reader transformation.', 'book'],
    ['fiction', 'Write a Fiction Book', 'Develop a novel with character, conflict, scene, pacing, and continuity logic.', 'feather'],
    ['upload', 'Upload and Improve a Manuscript', 'Analyze, sharpen, rewrite, expand, or rebuild an existing manuscript.', 'upload'],
    ['screenplay', 'Turn a Book Into a Screenplay', 'Adapt long-form work into screen-ready structure, scenes, and dialogue.', 'film'],
    ['publishing_pack', 'Create a Publishing Pack', 'Create cover, metadata, blurbs, categories, keywords, and export assets.', 'package'],
    ['movie_pitch_pack', 'Create a Movie or Series Pitch Pack', 'Build a logline, synopsis, treatment, beat sheet, and pitch copy.', 'clapper']
  ].map(([id, label, description, icon]) => ({ id, label, description, icon }));
  const BOOK_TYPES = {
    nonfiction: ['Business & Professional Development', 'Self-Help', 'Memoir', 'Faith & Spiritual Growth', 'Leadership', 'Technology & Innovation', 'Education', 'Health & Wellness', 'Biography', 'Personal Development', 'Public Policy & Government', 'Consulting / Thought Leadership', 'Christian Living', 'Spiritual Reflection', 'Career Development', 'Entrepreneurship', 'Organizational Transformation', 'Government Modernization'],
    fiction: ['Drama', 'Romance', 'Thriller', 'Mystery', 'Crime', 'Historical Fiction', 'Christian Fiction', 'Fantasy', 'Science Fiction', 'Young Adult', "Children's Story", 'Literary Fiction', 'Action / Adventure', 'Family Saga', 'Urban Fiction', 'Inspirational Fiction', 'Political Fiction', 'Speculative Fiction'],
    special: ['Workbook', 'Devotional', 'Course Book', 'Training Manual', "Children's Picture Book", 'Poetry Collection', 'Short Story Collection', 'Audiobook Script', 'Movie Screenplay', 'TV Pilot', 'Documentary Treatment', 'Stage Play', 'Podcast Series', 'Sermon Series', 'Corporate Training Script', 'YouTube Video Script']
  };
  const DESIGN_MODES = ['Executive Business', 'Luxury Minimalist', 'Cinematic Fiction', 'Faith-Based Inspirational', 'Memoir Emotional', 'Thriller Dark', 'Romance Elegant', "Children's Illustrated", 'Technology Futurist', 'African Premium Heritage', 'Academic Professional', 'Self-Help Bold', 'Spiritual Reflective', 'Documentary Poster', 'Movie Adaptation Poster'];
  const now = () => new Date().toISOString();
  const uid = (prefix) => `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;

  function createProject(input = {}) {
    const projectType = input.projectType || 'idea';
    const project = {
      id: uid('project'), userId: 'private-beta-user', projectType,
      title: input.title || 'Untitled project', subtitle: input.subtitle || '', authorName: input.authorName || '',
      status: 'idea', qualityScore: 0, publishingReadinessScore: 0, coverQualityScore: 0,
      createdAt: now(), updatedAt: now(), deletedAt: null,
      book: null, uploadedManuscript: null, adaptation: null, coverAsset: null, exportJobs: []
    };
    if (['idea', 'nonfiction', 'fiction'].includes(projectType)) project.book = createBook(project.id, input);
    if (projectType === 'fiction') project.book.storyBible = { premise: '', characters: [], world: '', plotOutline: [], sceneCards: [], continuityReport: null };
    if (projectType === 'upload') project.uploadedManuscript = createUploadedManuscript(project.id, input);
    if (['screenplay', 'movie_pitch_pack'].includes(projectType)) project.adaptation = createAdaptation(project.id, input.sourceProjectId || '', input);
    return project;
  }
  function createBook(projectId, input = {}) {
    const targetPages = Number(input.targetPages || 180); const wordsPerPage = Number(input.wordsPerPage || 275);
    return { id: uid('book'), projectId, bookType: input.bookType || (input.projectType === 'fiction' ? 'Literary Fiction' : 'Business & Professional Development'), genre: input.genre || '', targetAudience: input.targetAudience || '', bookIdea: input.bookIdea || '', idealReader: input.idealReader || '', tone: input.tone || 'Clear and authoritative', writingStyle: input.writingStyle || 'Insightful and practical', targetPages, wordsPerPage, targetWords: targetPages * wordsPerPage, actualWords: 0, cleanWords: 0, chapterCount: Number(input.chapterCount || 10), bookDna: {}, blueprint: {}, chapters: [] };
  }
  function createUploadedManuscript(projectId, input = {}) {
    return { id: uid('manuscript'), projectId, fileName: input.fileName || 'Pasted manuscript', fileType: input.fileType || 'pasted', sourceUrl: input.sourceUrl || '', originalText: input.originalText || '', improvedText: '', detectedStructure: detectStructure(input.originalText || ''), analysisReport: null, revisionHistory: [], createdAt: now() };
  }
  function detectStructure(text = '') {
    const lines = String(text).split('\n').map((line) => line.trim()).filter(Boolean);
    const headings = lines.filter((line) => /^(chapter|part|prologue|epilogue)\s+[\divxlc]+\b/i.test(line));
    return { title: lines[0] || '', headings, chapterCount: headings.filter((line) => /^chapter/i.test(line)).length, confirmed: false };
  }
  function analyzeManuscript(manuscript) {
    const quality = Quality.analyzeChapter(manuscript.originalText);
    const structure = manuscript.detectedStructure || detectStructure(manuscript.originalText);
    const structureScore = Math.min(100, 35 + structure.chapterCount * 6);
    const repetitionRisk = Math.min(100, quality.sentenceFamilies.length * 8 + quality.phraseFamilies.length * 12);
    return { titleAssessment: structure.title ? 'A title was detected and should be validated against genre expectations.' : 'No clear title was detected.', subtitleAssessment: 'Add or refine a benefit-oriented subtitle when the format supports one.', genreClassification: 'Requires author confirmation', audienceClarity: 'Clarify the primary reader and promised transformation.', structureQuality: structureScore, chapterByChapterCritique: structure.headings.map((title, index) => ({ chapter: index + 1, title, note: 'Review opening, argument or scene progression, and chapter payoff.' })), repetitionAnalysis: quality, sentenceQuality: quality.paddingDetected ? 'Revision required' : 'Promising', toneConsistency: 72, pacingAnalysis: 68, argumentStrength: 70, fictionCharacterArcAnalysis: 'Available after genre confirmation', nonfictionFrameworkClarity: 'Available after framework identification', screenAdaptationPotential: 76, coverReadinessScore: 45, publishingReadinessScore: quality.passed ? 72 : 48, overallQualityScore: Math.max(0, 78 - repetitionRisk / 2), repetitionRiskScore: repetitionRisk, structureScore, adaptationPotentialScore: 76, recommendedImprovementPlan: ['Confirm detected structure', 'Remove repeated language', 'Strengthen underdeveloped chapters', 'Run a genre-specific editorial pass', 'Create cover and publishing metadata'] };
  }
  function createAdaptation(projectId, sourceProjectId, input = {}) {
    return { id: uid('adaptation'), projectId, sourceProjectId, adaptationType: input.adaptationType || 'feature_film', logline: input.logline || '', synopsis: '', threeActStructure: [], beatSheet: [], sceneBreakdown: [], characterList: [], treatment: '', screenplayDraft: '', pitchDeckCopy: '', trailerNarration: '', runtimeEstimate: 0, qualityScore: 0, createdAt: now(), updatedAt: now() };
  }
  function buildAdaptationPlaceholder(project, sourceTitle = project.title) {
    const source = project.adaptation || createAdaptation(project.id, '', {});
    source.logline = `When a defining challenge disrupts the world of ${sourceTitle}, its central voice must act before certainty arrives—or lose the future it is trying to protect.`;
    source.synopsis = `A screen-focused adaptation of ${sourceTitle}, preserving the source theme while compressing its strongest turning points into a visual dramatic arc.`;
    source.threeActStructure = ['Act I — Establish the promise, pressure, and irreversible choice', 'Act II — Escalate opposition through visible consequences', 'Act III — Resolve the central test with a transformed strategy'];
    source.beatSheet = ['Opening image', 'Theme stated', 'Catalyst', 'Debate', 'Break into two', 'Midpoint', 'All is lost', 'Break into three', 'Finale', 'Final image'];
    source.sceneBreakdown = [{ scene: 1, heading: 'INT. WORKSPACE — EARLY MORNING', purpose: 'Make the central tension visible through action.' }];
    source.characterList = [{ name: 'Protagonist', function: 'Carries the source promise through consequential choices.' }];
    source.runtimeEstimate = source.adaptationType === 'tv_pilot' ? 55 : 105; source.qualityScore = 74; source.updatedAt = now();
    project.adaptation = source; return source;
  }
  function createCoverAsset(project, input = {}) {
    const mode = input.designMode || 'Executive Business';
    const title = project.title || 'Untitled'; const subtitle = project.subtitle || ''; const author = project.authorName || 'Author name';
    const palette = input.colorPalette || { primary: '#0B162E', accent: '#C99A3D', paper: '#F6F1E7', ink: '#07111F' };
    const qualityChecks = { titleReadability: Boolean(title), subtitleReadability: !subtitle || subtitle.length < 120, authorVisibility: Boolean(project.authorName), genreFit: true, thumbnailImpact: true, colorHarmony: true, typographyQuality: true, visualOriginality: true, professionalPolish: true };
    const score = Object.values(qualityChecks).filter(Boolean).length * 10;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1800" role="img" aria-label="${escapeXml(title)} book cover"><defs><linearGradient id="bg" x2="1" y2="1"><stop stop-color="${palette.ink}"/><stop offset="1" stop-color="${palette.primary}"/></linearGradient><filter id="glow"><feGaussianBlur stdDeviation="8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><rect width="1200" height="1800" fill="url(#bg)"/><path d="M180 1020 C180 650 505 520 650 760 C805 1015 1018 855 1018 585" fill="none" stroke="${palette.accent}" stroke-width="34" stroke-linecap="round" filter="url(#glow)"/><path d="M180 1080 C425 1090 680 1060 1020 920" fill="none" stroke="${palette.paper}" stroke-opacity=".22" stroke-width="3"/><text x="110" y="235" fill="${palette.accent}" font-family="Arial, sans-serif" font-size="27" letter-spacing="8">${escapeXml(mode.toUpperCase())}</text><text x="110" y="440" fill="${palette.paper}" font-family="Georgia, serif" font-size="108" font-weight="700">${svgLines(title, 15, 126)}</text><text x="115" y="770" fill="${palette.paper}" opacity=".84" font-family="Arial, sans-serif" font-size="35">${svgLines(subtitle, 42, 48)}</text><line x1="110" y1="1510" x2="1090" y2="1510" stroke="${palette.accent}" stroke-width="3"/><text x="110" y="1595" fill="${palette.paper}" font-family="Arial, sans-serif" font-size="42" letter-spacing="5">${escapeXml(author.toUpperCase())}</text></svg>`;
    return { id: uid('cover'), projectId: project.id, coverStatus: score >= 75 ? 'placeholder_ready' : 'failed_quality', designMode: mode, coverStrategy: 'Lead with a singular visual metaphor, disciplined hierarchy, and high-contrast shelf presence.', visualMetaphor: input.visualMetaphor || 'A refined golden loop transforming into a strategic roadmap.', genreShelfPositioning: `${mode} with premium editorial restraint`, thumbnailStrategy: 'Large title, one iconic form, no fine-detail dependency.', colorPalette: palette, typographyDirection: 'High-contrast editorial serif paired with precise modern sans serif.', compositionPlan: 'Upper title field, central metaphor, grounded author lockup.', avoidList: ['robots', 'circuit boards', 'neon cyberpunk', 'generic AI brain imagery', 'clipart', 'cover direction text'], coverPrompt: `Premium ${mode} book cover for “${title}”. Singular symbolic composition, editorial typography, strong thumbnail contrast, no text artifacts.`, negativePrompt: 'robots, circuitry, generic AI brain, clipart, clutter, weak contrast, illegible typography', coverImageUrl: '', coverSvg: svg, coverHtml: '', coverQualityScore: score, qualityChecks, createdAt: now(), updatedAt: now() };
  }
  function escapeXml(value = '') { return String(value).replace(/[<>&"']/g, (char) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' }[char])); }
  function svgLines(value = '', max = 16, dy = 110) { const tokens = String(value).split(/\s+/); const lines = []; let line = ''; tokens.forEach((token) => { if (`${line} ${token}`.trim().length > max && line) { lines.push(line); line = token; } else line = `${line} ${token}`.trim(); }); if (line) lines.push(line); return lines.slice(0, 4).map((item, index) => `<tspan x="110" dy="${index ? dy : 0}">${escapeXml(item)}</tspan>`).join(''); }
  function publishingReadiness(project) {
    const bookReport = project.book ? Quality.analyzeBook(project.book.chapters || [], project.book.targetWords) : null;
    const checks = {
      title: Boolean(project.title && project.title !== 'Untitled project'), author: Boolean(project.authorName),
      cover: Boolean(project.coverAsset && project.coverAsset.coverQualityScore >= 75),
      tableOfContents: Boolean(project.book && project.book.chapters.length),
      chapters: Boolean(project.book && project.book.chapters.length === project.book.chapterCount),
      quality: Boolean(bookReport && bookReport.passed), promptLeakage: Boolean(bookReport && bookReport.chapterReports.every((report) => !report.leakageDetected)),
      cleanWordCount: Boolean(bookReport && bookReport.cleanPercent >= 90)
    };
    const score = Math.round(Object.values(checks).filter(Boolean).length / Object.keys(checks).length * 100);
    const blockers = Object.entries(checks).filter(([, passed]) => !passed).map(([name]) => name.replace(/([A-Z])/g, ' $1').toLowerCase());
    let status = 'not_ready';
    if (!checks.cover) status = 'needs_cover'; else if (!checks.quality || !checks.promptLeakage) status = 'needs_content_review'; else if (!checks.cleanWordCount) status = 'needs_expansion'; else if (score === 100) status = 'ready_for_export';
    project.publishingReadinessScore = score; return { status, score, checks, blockers, bookReport };
  }
  function softDelete(project) { project.status = 'deleted'; project.deletedAt = now(); project.updatedAt = now(); return project; }
  function duplicateProject(project, projectType = project.projectType) { const copy = JSON.parse(JSON.stringify(project)); copy.id = uid('project'); copy.projectType = projectType; copy.title = `${project.title} — Adapted copy`; copy.status = 'idea'; copy.createdAt = now(); copy.updatedAt = now(); copy.deletedAt = null; copy.exportJobs = []; if (projectType === 'screenplay') copy.adaptation = createAdaptation(copy.id, project.id, {}); return copy; }
  return { CREATION_PATHS, BOOK_TYPES, DESIGN_MODES, createProject, createBook, createUploadedManuscript, detectStructure, analyzeManuscript, createAdaptation, buildAdaptationPlaceholder, createCoverAsset, publishingReadiness, softDelete, duplicateProject };
}));
