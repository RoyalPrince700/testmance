// Import chapter content directly
import { chapter1Content } from './chapter1-gns311';

// Debug: Check if import worked
console.log('chapter1Content imported:', typeof chapter1Content, !!chapter1Content);

// Helper function to get content by chapter title, order, or course code
export const getChapterContent = (chapterTitle, chapterOrder = null, courseCode = null) => {
  // Debug: Check if chapter1Content is available
  console.log('getChapterContent called, chapter1Content available:', typeof chapter1Content, !!chapter1Content);
  
  // Map chapter titles to content files
  const contentMap = {
    'The Structure of Science, Scientific Methods and Revolution': chapter1Content,
    // Add more chapters here as they're created
  };

  // Also map by order for GNS 311
  const orderMap = {
    1: chapter1Content, // First chapter of GNS 311
    // Add more orders here
  };

  // Try exact title match first
  if (chapterTitle) {
    const normalizedTitle = chapterTitle.trim();
    
    if (contentMap[normalizedTitle]) {
      console.log('Found content by exact title match');
      return contentMap[normalizedTitle];
    }

    // Try case-insensitive match
    const lowerTitle = normalizedTitle.toLowerCase();
    for (const [key, value] of Object.entries(contentMap)) {
      if (key.toLowerCase() === lowerTitle) {
        console.log('Found content by case-insensitive match');
        return value;
      }
    }
  }

  // Try order match (for GNS 311, order 1 = chapter 1)
  if (chapterOrder && courseCode === 'GNS 311' && orderMap[chapterOrder]) {
    console.log(`Found content by order ${chapterOrder} for ${courseCode}`);
    return orderMap[chapterOrder];
  }

  console.log('No content found:', { chapterTitle, chapterOrder, courseCode });
  console.log('Available titles:', Object.keys(contentMap));
  
  return null;
};

// Re-export for convenience
export { chapter1Content };

