// Import chapter content directly
import { chapter1Content } from './content/chapter1-cos101.js';
import { chapter2Content } from './content/chapter2-cos101.js';
import { chapter3Content } from './content/chapter3-cos101.js';
import { chapter4Content } from './content/chapter4-cos101.js';
import { chapter5Content } from './content/chapter5-cos101.js';
import { chapter6Content } from './content/chapter6-cos101.js';
// Add more chapter imports here as they're created
// etc.

// Helper function to get content by chapter title, order, or course code
export const getChapterContent = (chapterTitle, chapterOrder = null, courseCode = null) => {
  // Map chapter titles to content files
  const contentMap = {
    'Basic Computing Concepts': chapter1Content,
    'Basic Components of Computer': chapter2Content,
    'Boolean Algebra, Fundamentals of Truth Tables and Precedence Algebra': chapter3Content,
    'Diverse and Growing Computers and Digital Applications': chapter4Content,
    'The Internet: Its Application and Impact on the World Today': chapter5Content,
    'Job Specializations and Future of Computing': chapter6Content,
    // Add more chapters here as they're created
    // etc.
  };

  // Also map by order for COS 101
  const orderMap = {
    1: chapter1Content, // First chapter of COS 101
    2: chapter2Content, // Second chapter of COS 101
    3: chapter3Content, // Third chapter of COS 101
    4: chapter4Content, // Fourth chapter of COS 101
    6: chapter6Content, // Sixth chapter of COS 101
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

    // Try partial match for robustness
    for (const [key, value] of Object.entries(contentMap)) {
      if (key.toLowerCase().includes(lowerTitle) || lowerTitle.includes(key.toLowerCase())) {
        return value;
      }
    }
  }

  // Try order match (for COS 101, order 1 = chapter 1)
  if (chapterOrder && courseCode === 'COS 101' && orderMap[chapterOrder]) {
    return orderMap[chapterOrder];
  }

  return null;
};

// Re-export for convenience
export { chapter1Content, chapter2Content, chapter3Content, chapter4Content, chapter5Content, chapter6Content };
// Add more exports here as chapters are created
// export { ..., ... };
