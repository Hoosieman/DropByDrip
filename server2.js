const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Handle POST requests to /signup
app.post('/signup', (req, res) => {
  const { email, password } = req.body;

  // Simple validation
  if (!email || !password) {
    return res.status(400).json({ error: 'Please fill in all fields.' });
  }

  // Your signup logic goes here
  // You can store the user data in a database or perform other actions

  // Respond with a success message
  res.json({ success: true, message: 'Signup successful!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
