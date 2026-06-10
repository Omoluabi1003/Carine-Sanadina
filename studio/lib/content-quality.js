(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.ClarityQuality = api;
}(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const FORBIDDEN_PHRASES = [
    'in relation to operating reality', 'in relation to decision evidence',
    'in relation to human behavior', 'useful unit of analysis',
    'remaining an attractive slogan', 'without perfect data or unlimited authority',
    'the governing question is how the thesis becomes visible',
    'observable artifacts, and changed behavior', 'what must become observable now',
    "unlike the earlier chapter's concern"
  ];
  const LEAKAGE_PATTERNS = [
    /\bbook dna\b/gi, /\bideal reader\s*:/gi, /\bbook idea\s*:/gi,
    /\bchapter intention\s*:/gi, /\bcover direction\s*:/gi,
    /\bprompt instructions?\s*:/gi, /\binternal generation rules?\b/gi,
    /\bscaffold(?: label)?\s*:/gi
  ];
  const THRESHOLDS = Object.freeze({
    phrasePerChapter: 5, phrasePerBook: 25, sentenceSimilarity: 0.82,
    sentenceFamilyPerBook: 10, paragraphSimilarity: 0.84, cleanWordPercent: 90
  });

  const words = (text = '') => String(text).trim().match(/[\p{L}\p{N}’'-]+/gu) || [];
  const wordCount = (text) => words(text).length;
  const normalize = (text = '') => String(text).toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, ' ').replace(/\b\d+\b/g, '#').replace(/\s+/g, ' ').trim();
  const tokenSet = (text) => new Set(normalize(text).split(' ').filter(Boolean));
  const similarity = (a, b) => {
    const left = tokenSet(a); const right = tokenSet(b);
    if (!left.size || !right.size) return 0;
    const intersection = [...left].filter((token) => right.has(token)).length;
    return intersection / (left.size + right.size - intersection);
  };
  const splitSentences = (text = '') => String(text).split(/(?<=[.!?])\s+/).map((item) => item.trim()).filter((item) => wordCount(item) >= 6);
  const splitParagraphs = (text = '') => String(text).split(/\n\s*\n/).map((item) => item.trim()).filter(Boolean);
  const countMatches = (text, phrase) => (String(text).toLowerCase().match(new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;

  function analyzeChapter(content, options = {}) {
    const targetWords = Number(options.targetWords || 0);
    const sentences = splitSentences(content);
    const paragraphs = splitParagraphs(content);
    const phraseFamilies = FORBIDDEN_PHRASES.map((phrase) => ({ phrase, occurrences: countMatches(content, phrase) })).filter((item) => item.occurrences);
    const leakageFlags = LEAKAGE_PATTERNS.flatMap((pattern) => {
      const matches = String(content).match(pattern) || [];
      return matches.map((match) => match.replace(/\s*:\s*$/, ''));
    });
    const duplicateSentenceIndexes = new Set();
    const sentenceFamilies = [];
    sentences.forEach((sentence, index) => {
      for (let compare = 0; compare < index; compare += 1) {
        const score = similarity(sentence, sentences[compare]);
        if (score >= THRESHOLDS.sentenceSimilarity) {
          duplicateSentenceIndexes.add(index);
          sentenceFamilies.push({ sample: sentences[compare], repeated: sentence, similarity: Number(score.toFixed(2)) });
          break;
        }
      }
    });
    const duplicateParagraphIndexes = new Set();
    paragraphs.forEach((paragraph, index) => {
      for (let compare = 0; compare < index; compare += 1) {
        if (similarity(paragraph, paragraphs[compare]) >= THRESHOLDS.paragraphSimilarity) {
          duplicateParagraphIndexes.add(index); break;
        }
      }
    });
    const excludedSentences = new Set(duplicateSentenceIndexes);
    sentences.forEach((sentence, index) => {
      if (FORBIDDEN_PHRASES.some((phrase) => normalize(sentence).includes(phrase)) || LEAKAGE_PATTERNS.some((pattern) => { pattern.lastIndex = 0; return pattern.test(sentence); })) excludedSentences.add(index);
    });
    const cleanContent = sentences.filter((_, index) => !excludedSentences.has(index)).join(' ');
    const rawWords = wordCount(content);
    const cleanWords = wordCount(cleanContent);
    const phraseFailure = phraseFamilies.some((item) => item.occurrences > THRESHOLDS.phrasePerChapter);
    const paddingDetected = duplicateSentenceIndexes.size > 0 || duplicateParagraphIndexes.size > 0 || phraseFailure;
    const leakageDetected = leakageFlags.length > 0;
    const cleanPercent = targetWords ? Math.round((cleanWords / targetWords) * 100) : 100;
    const passed = !paddingDetected && !leakageDetected && (!targetWords || cleanPercent >= THRESHOLDS.cleanWordPercent);
    return {
      rawWords, cleanWords, cleanPercent, phraseFamilies, sentenceFamilies,
      duplicateParagraphs: duplicateParagraphIndexes.size, leakageFlags: [...new Set(leakageFlags)],
      paddingDetected, leakageDetected, passed,
      status: passed ? 'reviewed' : (paddingDetected || leakageDetected ? 'failed_quality_review' : 'underdeveloped'),
      actions: passed ? [] : ['Rewrite without padding', 'Expand with examples', 'Expand with case studies', 'Rebuild chapter from outline']
    };
  }

  function analyzeBook(chapters = [], targetWords = 0) {
    const chapterReports = chapters.map((chapter) => analyzeChapter(chapter.content || '', { targetWords: chapter.targetWordCount || 0 }));
    const phraseTotals = FORBIDDEN_PHRASES.map((phrase) => ({ phrase, occurrences: chapters.reduce((sum, chapter) => sum + countMatches(chapter.content, phrase), 0) })).filter((item) => item.occurrences);
    const rawWords = chapterReports.reduce((sum, report) => sum + report.rawWords, 0);
    const cleanWords = chapterReports.reduce((sum, report) => sum + report.cleanWords, 0);
    const crossChapterFamilies = [];
    chapters.forEach((chapter, index) => splitSentences(chapter.content).forEach((sentence) => {
      chapters.slice(index + 1).forEach((later, offset) => splitSentences(later.content).forEach((candidate) => {
        const score = similarity(sentence, candidate);
        if (score >= THRESHOLDS.sentenceSimilarity) crossChapterFamilies.push({ chapters: [index + 1, index + offset + 2], sample: sentence, similarity: Number(score.toFixed(2)) });
      }));
    }));
    const cleanPercent = targetWords ? Math.round((cleanWords / targetWords) * 100) : 100;
    const blockers = [];
    if (cleanPercent < THRESHOLDS.cleanWordPercent) blockers.push(`Clean word count is ${cleanPercent}% of target; 90% is required.`);
    if (phraseTotals.some((item) => item.occurrences > THRESHOLDS.phrasePerBook)) blockers.push('A forbidden phrase family exceeds the book threshold.');
    if (crossChapterFamilies.length > THRESHOLDS.sentenceFamilyPerBook) blockers.push('Repeated sentence families exceed the book threshold.');
    if (chapterReports.some((report) => !report.passed)) blockers.push('One or more chapters failed quality review.');
    return { rawWords, cleanWords, cleanPercent, phraseTotals, crossChapterFamilies, chapterReports, passed: blockers.length === 0, blockers };
  }

  function repairLeakage(content = '') {
    return splitParagraphs(content).filter((paragraph) => !LEAKAGE_PATTERNS.some((pattern) => { pattern.lastIndex = 0; return pattern.test(paragraph); })).join('\n\n');
  }

  return { FORBIDDEN_PHRASES, LEAKAGE_PATTERNS, THRESHOLDS, wordCount, similarity, analyzeChapter, analyzeBook, repairLeakage };
}));
