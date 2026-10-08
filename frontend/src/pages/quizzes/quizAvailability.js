const QUIZ_CHAPTER_COUNTS = {
  'GNS 311': 16,
  'GST 111': 12,
  'COS 101': 6,
  'BIO 101': 6,
  'ENT 211': 9,
};

export function chapterHasQuiz(courseCode, chapterOrder) {
  const code = String(courseCode || '').toUpperCase().replace(/\s+/g, ' ').trim();
  const count = QUIZ_CHAPTER_COUNTS[code];
  const order = Number(chapterOrder);
  return Boolean(count && order >= 1 && order <= count);
}
