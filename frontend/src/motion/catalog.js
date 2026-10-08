import { bio101Motion } from '../pages/bio101/motion/bio101.motion.js'
import { bio101Chapter1 } from '../pages/bio101/motion/bio101-chapter1.motion.js'

const RESOURCES = {
  BIO101: bio101Motion,
}

const CHAPTERS = {
  BIO101: {
    1: bio101Chapter1,
  },
}

export function normalizeCourseCode(courseCode) {
  return String(courseCode || '').replace(/[^a-z0-9]/gi, '').toUpperCase()
}

export function getMotionResource(courseCode) {
  return RESOURCES[normalizeCourseCode(courseCode)] || null
}

export function getChapterMotion(courseCode, chapterOrder) {
  const chapters = CHAPTERS[normalizeCourseCode(courseCode)]
  if (!chapters) return null
  return chapters[Number(chapterOrder)] || null
}
