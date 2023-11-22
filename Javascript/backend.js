const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

const drinkButtons = {
    drinkButton1: { clickCount: 0 },
    drinkButton2: { clickCount: 0 },
    drinkButton3: { clickCount: 0 },
    drinkButton4: { clickCount: 0 },
    drinkButton5: { clickCount: 0 },
    drinkButton6: { clickCount: 0 },
    drinkButton7: { clickCount: 0 },
    drinkButton8: { clickCount: 0 },
    drinkButton9: { clickCount: 0 },
    drinkButton10: { clickCount: 0 },
    drinkButton11: { clickCount: 0 },
    drinkButton12: { clickCount: 0 },
    drinkButton13: { clickCount: 0 },
    drinkButton14: { clickCount: 0 },
    drinkButton15: { clickCount: 0 },
  };
  

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ... your existing routes ...

app.post('/click/:buttonId', (req, res) => {
    try {
      const buttonId = req.params.buttonId;
      const button = drinkButtons[buttonId];
  
      if (button) {
        button.clickCount += 1;
        res.json({ success: true, clickCount: button.clickCount });
      } else {
        res.status(404).json({ success: false, message: 'Button not found' });
      }
    } catch (error) {
      console.error('Internal Server Error:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
    }
  });
  
  

app.get('/clicks', (req, res) => {
  res.json(drinkButtons);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
