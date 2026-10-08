const COURSE_SLUGS_BY_CODE = {
  ent211: 'entrepreneurship',
  bio101: 'biology',
  cos101: 'computer-science',
  gst111: 'communication-in-english',
  gns211: 'peace-studies',
  gns311: 'history-and-philosophy-of-science',
};

const RESERVED = new Set([
  'about',
  'contact',
  'login',
  'register',
  'auth',
  'profile-setup',
  'dashboard',
  'courses',
  'chapters',
  'quizzes',
  'quiz-hub',
  'ca',
  'exam',
  'results',
  'leaderboard',
  'profile',
  'admin',
  'terms',
  'privacy',
]);

export function slugify(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

export function isObjectId(value) {
  return /^[a-f\d]{24}$/i.test(String(value || ''));
}

export function isReservedPath(segment) {
  return RESERVED.has(String(segment || '').toLowerCase());
}

export function isLearningPath(pathname) {
  if (pathname === '/courses' || pathname.startsWith('/courses/') || pathname.startsWith('/chapters/')) {
    return true;
  }
  const [first] = String(pathname || '').split('/').filter(Boolean);
  if (!first) return false;
  return !RESERVED.has(first);
}

function courseCodeKey(code) {
  return String(code || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

export function courseSlug(course) {
  if (!course) return '';
  const mapped = COURSE_SLUGS_BY_CODE[courseCodeKey(course.code)];
  let slug = mapped || slugify(course.title) || slugify(course.code);
  if (RESERVED.has(slug)) slug = `${slug}-course`;
  return slug;
}

export function coursePath(course) {
  const slug = courseSlug(course);
  return slug ? `/${slug}` : '/courses';
}

export function buildChapterSlugMap(chapters = []) {
  const counts = new Map();
  const bases = chapters.map((chapter) => {
    const base = slugify(chapter.title) || `chapter-${chapter.order || 'item'}`;
    counts.set(base, (counts.get(base) || 0) + 1);
    return base;
  });

  const map = new Map();
  chapters.forEach((chapter, index) => {
    const base = bases[index];
    const slug = counts.get(base) > 1 ? `${base}-${chapter.order}` : base;
    map.set(String(chapter._id), slug);
  });
  return map;
}

export function chapterSlug(chapter, chapters) {
  const list = chapters?.length ? chapters : [chapter];
  const map = buildChapterSlugMap(list);
  return map.get(String(chapter?._id)) || slugify(chapter?.title) || `chapter-${chapter?.order || 'item'}`;
}

export function chapterPath(course, chapter, chapters) {
  return `${coursePath(course)}/${chapterSlug(chapter, chapters)}`;
}

export function quizCoursePath(course) {
  const slug = courseSlug(course);
  return slug ? `/quiz-hub/${slug}` : '/quiz-hub';
}

export function quizPath(course, chapter, chapters) {
  return `${quizCoursePath(course)}/${chapterSlug(chapter, chapters)}`;
}

export function findChapterBySlug(chapters, slug) {
  const map = buildChapterSlugMap(chapters);
  return chapters.find((chapter) => map.get(String(chapter._id)) === slug) || null;
}
