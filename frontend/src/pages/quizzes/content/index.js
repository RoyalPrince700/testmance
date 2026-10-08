const quizCache = new Map();

const loaders = {
  'GNS 311': (order) => import(`./gns311-chapter${order}.js`),
  'GST 111': (order) => import(`../../gst111/quizzes/content/gst111-chapter${order}.js`),
  'COS 101': (order) => import(`../../cos101/quizzes/content/cos101-chapter${order}.js`),
  'BIO 101': (order) => import(`../../bio101/quizzes/content/bio101-chapter${order}.js`),
  'ENT 211': (order) => import(`../../ent211/quizzes/content/ent211-chapter${order}.js`),
};

const exportPrefixes = {
  'GNS 311': 'gns311',
  'GST 111': 'gst111',
  'COS 101': 'cos101',
  'BIO 101': 'bio101',
  'ENT 211': 'ent211',
};

function normalizeCourseCode(courseCode) {
  return String(courseCode || '').toUpperCase().replace(/\s+/g, ' ').trim();
}

export const getQuizContent = async (chapterTitle, chapterOrder = null, courseCode = null) => {
  const code = normalizeCourseCode(courseCode);
  const order = Number(chapterOrder);
  const load = loaders[code];
  if (!load || !Number.isInteger(order) || order < 1) return null;

  const cacheKey = `${code}:${order}`;
  if (quizCache.has(cacheKey)) return quizCache.get(cacheKey);

  try {
    const module = await load(order);
    const quiz = module[`${exportPrefixes[code]}Chapter${order}Quiz`] || null;
    if (quiz) quizCache.set(cacheKey, quiz);
    return quiz;
  } catch (error) {
    console.error(`Failed to load ${code} chapter ${order} quiz:`, error);
    return null;
  }
};

export const getQuizByOrder = (courseCode, chapterOrder) => getQuizContent(null, chapterOrder, courseCode);
