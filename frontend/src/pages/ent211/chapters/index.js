// Import chapter content directly
import { chapter1Content } from './content/chapter1-ent211.js';
import { chapter2Content } from './content/chapter2-ent211.js';
import { chapter3Content } from './content/chapter3-ent211.js';
import { chapter4Content } from './content/chapter4-ent211.js';
import { chapter5Content } from './content/chapter5-ent211.js';
import { chapter6Content } from './content/chapter6-ent211.js';
import { chapter7Content } from './content/chapter7-ent211.js';
import { chapter8Content } from './content/chapter8-ent211.js';
import { chapter9Content } from './content/chapter9-ent211.js';
// Add more chapter imports here as they're created
// etc.

// Helper function to get content by chapter title, order, or course code
export const getChapterContent = (chapterTitle, chapterOrder = null, courseCode = null) => {
  // Map chapter titles to content files
  const contentMap = {
    'Concept of Entrepreneurship': chapter1Content,
    'Nigerian Business Environment and Entrepreneurial Opportunities in Nigeria through SMEs': chapter2Content,
    'Feasibility Study And Feasibility Report Writing': chapter3Content,
    'Understanding The Nexus Between Innovation And Employability For Nigerian Graduates': chapter4Content,
    'Entrepreneurship Approach to Marketing and Validation of Products and Services Idea': chapter5Content,
    'Business Planning': chapter6Content,
    'Sources of Finance and Basic Accounting Records for Entrepreneurs': chapter7Content,
    'Human Resources Management Practices For Entrepreneurship': chapter8Content,
    'Introduction to Electronic Commerce': chapter9Content,
    // Add more chapters here as they're created
    // etc.
  };

  // Also map by order for ENT 211
  const orderMap = {
    1: chapter1Content, // First chapter of ENT 211
    2: chapter2Content, // Second chapter of ENT 211
    3: chapter3Content, // Third chapter of ENT 211
    4: chapter4Content, // Fourth chapter of ENT 211
    5: chapter5Content, // Fifth chapter of ENT 211
    6: chapter6Content, // Sixth chapter of ENT 211
    7: chapter7Content, // Seventh chapter of ENT 211
    8: chapter8Content, // Eighth chapter of ENT 211
    9: chapter9Content, // Ninth chapter of ENT 211
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

  // Try order match (for ENT 211, order 1 = chapter 1)
  if (chapterOrder && courseCode === 'ENT 211' && orderMap[chapterOrder]) {
    return orderMap[chapterOrder];
  }

  return null;
};

// Re-export for convenience
export { chapter1Content, chapter2Content, chapter3Content, chapter4Content, chapter5Content, chapter6Content, chapter7Content, chapter8Content, chapter9Content };
// Add more exports here as chapters are created
// export { ..., ... };