const express = require('express');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

console.log('Environment loaded successfully');
console.log('MONGODB_URI:', process.env.MONGODB_URI ? 'Set' : 'Not set');

const app = express();

app.get('/test', (req, res) => {
  res.json({ message: 'Server is working!' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});