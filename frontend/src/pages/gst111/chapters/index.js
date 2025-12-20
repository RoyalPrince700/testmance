// Import chapter content directly
import { chapter1Content } from './content/chapter1-gst111.js';
import { chapter2Content } from './content/chapter2-gst111.js';
import { chapter3Content } from './content/chapter3-gst111.js';
import { chapter4Content } from './content/chapter4-gst111.js';
import { chapter5Content } from './content/chapter5-gst111.js';
import { chapter6Content } from './content/chapter6-gst111.js';
import { chapter7Content } from './content/chapter7-gst111.js';
import { chapter8Content } from './content/chapter8-gst111.js';
import { chapter9Content } from './content/chapter9-gst111.js';
import { chapter10Content } from './content/chapter10-gst111.js';
import { chapter11Content } from './content/chapter11-gst111.js';
import { chapter12Content } from './content/chapter12-gst111.js';
// Add more chapter imports here as they're created
// etc.

// Helper function to get content by chapter title, order, or course code
export const getChapterContent = (chapterTitle, chapterOrder = null, courseCode = null) => {
  // Map chapter titles to content files
  const contentMap = {
    'Speaking Skills': chapter1Content,
    'Argument Basics': chapter2Content,
    'Listening Skills': chapter3Content,
    'Clause and Clause Types': chapter4Content,
    'Parts of Speech': chapter5Content,
    'ICT in Modern Language Learning': chapter6Content,
    'Grammatical Words': chapter7Content,
    'Reading Comprehension Strategies': chapter8Content,
    'Sound Pattern in English Language (Phonetics and Phonology)': chapter9Content,
    'Writing Skills Introduction': chapter10Content,
    'Logical Reasoning and Thinking': chapter11Content,
    'Mood In Grammar': chapter12Content,
    // Add more chapters here as they're created
    // etc.
  };

  // Also map by order for GST 111
  const orderMap = {
    1: chapter1Content, // First chapter of GST 111
    2: chapter2Content, // Second chapter of GST 111
    3: chapter3Content, // Third chapter of GST 111
    4: chapter4Content, // Fourth chapter of GST 111
    5: chapter5Content, // Fifth chapter of GST 111
    6: chapter6Content, // Sixth chapter of GST 111
    7: chapter7Content, // Seventh chapter of GST 111
    8: chapter8Content, // Eighth chapter of GST 111
    9: chapter9Content, // Ninth chapter of GST 111
    10: chapter10Content, // Tenth chapter of GST 111
    11: chapter11Content, // Eleventh chapter of GST 111
    12: chapter12Content, // Twelfth chapter of GST 111
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

  // Try order match (for GST 111, order 1 = chapter 1)
  if (chapterOrder && courseCode === 'GST 111' && orderMap[chapterOrder]) {
    return orderMap[chapterOrder];
  }

  return null;
};

// Re-export for convenience
export { chapter1Content, chapter2Content, chapter3Content, chapter4Content, chapter5Content, chapter6Content, chapter7Content, chapter8Content, chapter9Content, chapter10Content, chapter11Content, chapter12Content };
// Add more exports here as chapters are created
// export { ..., ... };
