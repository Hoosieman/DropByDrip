const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('Welcome to my server!');
  });

// Dummy data for drink buttons
const drinkButtons = {
  drinkButton1: { clickCount: 0 },
  drinkButton2: { clickCount: 0 },
};

// Increment the click count for a drink button
app.post('/click/:buttonId', (req, res) => {
  const buttonId = req.params.buttonId;
  const button = drinkButtons[buttonId];

  if (button) {
    button.clickCount += 1;
    res.json({ success: true, clickCount: button.clickCount });
  } else {
    res.status(404).json({ success: false, message: 'Button not found' });
  }
});

// Get click counts for all drink buttons
app.get('/clicks', (req, res) => {
  res.json(drinkButtons);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});