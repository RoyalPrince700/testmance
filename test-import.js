// Test import
try {
  const { gns311Chapter15Quiz } = require('./frontend/src/pages/quizzes/content/gns311-chapter15.js');
  console.log('Import successful');
  console.log('Title:', gns311Chapter15Quiz.title);
} catch (error) {
  console.log('Import failed:', error.message);
}
