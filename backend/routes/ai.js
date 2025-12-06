const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize Gemini AI
// Make sure GEMINI_API_KEY is set in your backend/.env file
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post('/explain', async (req, res) => {
  try {
    const { topic, content, analogy } = req.body;

    if (!content) {
      return res.status(400).json({ error: 'Content is required' });
    }

    // Initialize model
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    let analogyInstruction = '';
    if (analogy && analogy !== 'general') {
      analogyInstruction = `Use analogies related to ${analogy} to explain the concepts. Make it fun and relatable using terms from ${analogy}.`;
    } else {
      analogyInstruction = 'Use simple, everyday real-world analogies to explain the concepts.';
    }

    const prompt = `
    You are an expert academic tutor for undergraduate students. 
    Your task is to explain the following educational content in a simple, clear, and engaging way.
    
    Topic: ${topic || 'General Science'}
    
    Content to explain:
    ${content}
    
    Instructions:
    1. Provide a simple summary of the key concepts.
    2. ${analogyInstruction}
    3. Keep the tone encouraging, fun, and educational.
    4. IMPORTANT: Do NOT use Markdown symbols like asterisks (**) or hash signs (#). 
    5. Instead, use HTML tags for formatting: <b> for bold, <ul> and <li> for lists, <p> for paragraphs, and <br> for line breaks.
    6. Ensure the output is clean HTML that can be directly rendered.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.json({ explanation: text });
  } catch (error) {
    console.error('Gemini AI Error:', error);
    res.status(500).json({ 
      error: 'Failed to generate explanation',
      details: error.message 
    });
  }
});

module.exports = router;
