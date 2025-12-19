// Import chapter content directly
import { chapter1Content } from './content/chapter1-bio101.js';
import { chapter2Content } from './content/chapter2-bio101.js';
import { chapter3Content } from './content/chapter3-bio101.js';
import { chapter4Content } from './content/chapter4-bio101.js';
import { chapter5Content } from './content/chapter5-bio101.js';
import { chapter6Content } from './content/chapter6-bio101.js';
// Add more chapter imports here as they're created
// etc.

// Helper function to get content by chapter title, order, or course code
export const getChapterContent = (chapterTitle, chapterOrder = null, courseCode = null) => {
  // Map chapter titles to content files
  const contentMap = {
    'Characteristics and Classification of Living Organisms': chapter1Content,
    'INTERRELATIONSHIP IN ORGANISMS': chapter2Content,
    'ECOLOGY': chapter3Content,
    'CELL': chapter4Content,
    'GENES': chapter5Content,
    'Heredity and evolution': chapter6Content,
    // Add more chapters here as they're created
    // etc.
  };

  // Also map by order for BIO 101
  const orderMap = {
    1: chapter1Content, // First chapter of BIO 101
    2: chapter2Content, // Second chapter of BIO 101
    3: chapter3Content, // Third chapter of BIO 101
    4: chapter4Content, // Fourth chapter of BIO 101
    5: chapter5Content, // Fifth chapter of BIO 101
    6: chapter6Content, // Sixth chapter of BIO 101
    // Add more orders here
    // etc.
  };

  // Try exact title match first
  if (chapterTitle) {
    const normalizedTitle = chapterTitle.trim();

    if (contentMap[normalizedTitle]) {
      return contentMap[normalizedTitle];
    }

    // Try case-insensitive match
    const lowerTitle = normalizedTitle.toLowerCase();
    for (const [key, value] of Object.entries(contentMap)) {
      if (key.toLowerCase() === lowerTitle) {
        return value;
      }
    }
  }

  // Try order match (for BIO 101, order 1 = chapter 1)
  if (chapterOrder && courseCode === 'BIO 101' && orderMap[chapterOrder]) {
    return orderMap[chapterOrder];
  }

  return null;
};

// Re-export for convenience
export { chapter1Content, chapter2Content, chapter3Content, chapter4Content, chapter5Content, chapter6Content };
// Add more exports here as chapters are created
// export { ..., ... };
