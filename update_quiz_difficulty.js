const fs = require('fs');
const path = require('path');

// Function to add difficulty levels to quiz questions
function addDifficultyToQuiz(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // First, remove any duplicate difficulty lines that might exist
    content = content.replace(/,\s*difficulty:\s*['"]\w+['"]\s*\}\s*},/gs, '},');

    // Add difficulty to questions that don't have it
    content = content.replace(
      /(correctAnswer:\s*\d+,\s*explanation:\s*['"](.*?)['"],\s*points:\s*\d+)\s*\}/gs,
      (match, before, explanation) => {
        // Simple logic to assign difficulty based on question content
        let difficulty = 'medium'; // default

        const explanationText = explanation.toLowerCase();

        // Easy: Basic recall questions
        if (explanationText.includes('has') ||
            explanationText.includes('is') ||
            explanationText.includes('are') ||
            explanationText.includes('basic') ||
            explanationText.includes('simple')) {
          difficulty = 'easy';
        }
        // Difficult: Complex analysis questions
        else if (explanationText.includes('explain') ||
                 explanationText.includes('why') ||
                 explanationText.includes('analyze') ||
                 explanationText.includes('compare') ||
                 explanationText.includes('contrast') ||
                 explanationText.includes('evaluate') ||
                 explanationText.includes('complex')) {
          difficulty = 'difficult';
        }
        // Medium: Everything else (application, understanding)

        return `${before},\n      difficulty: '${difficulty}'\n    }`;
      }
    );

    // Write back to file
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);

  } catch (error) {
    console.error(`Error updating ${filePath}:`, error.message);
  }
}

// Get all quiz content files
const quizDir = path.join(__dirname, 'frontend/src/pages');

function findQuizFiles(dir) {
  const files = [];

  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);

    items.forEach(item => {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.js') && fullPath.includes('quizzes') && fullPath.includes('content') && !item.includes('index')) {
        files.push(fullPath);
      }
    });
  }

  traverse(dir);
  return files;
}

console.log('Finding quiz files...');
const quizFiles = findQuizFiles(quizDir);
console.log(`Found ${quizFiles.length} quiz files to update`);

// Update each file
quizFiles.forEach(filePath => {
  addDifficultyToQuiz(filePath);
});

console.log('All quiz files updated with difficulty levels!');