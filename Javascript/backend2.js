const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoURI = 'mongodb+srv://123:123@coleto.mt5dxlu.mongodb.net/'; // Replace with your MongoDB URI

let db;

async function connectToDatabase() {
  const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to the database');
    db = client.db('coleto'); // Replace with your database name
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    process.exit(1);
  }
}

app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

// Increment the click count for a drink button
app.post('/click/:buttonId', async (req, res) => {
  const buttonId = req.params.buttonId;

  try {
    // Find and update the document in the MongoDB collection
    const result = await db.collection('clickCounts').findOneAndUpdate(
      { buttonId },
      { $inc: { clickCount: 1 } },
      { upsert: true, returnDocument: 'after' }
    );

    res.json({ success: true, clickCount: result.value.clickCount });
  } catch (error) {
    console.error('Error updating click count:', error.message);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

// Get click counts for all drink buttons
app.get('/clicks', async (req, res) => {
  try {
    const clickCounts = await db.collection('clickCounts').find().toArray();
    const formattedClickCounts = {};

    // Format the click counts for each button
    clickCounts.forEach((clickCount) => {
      formattedClickCounts[clickCount.buttonId] = { clickCount: clickCount.clickCount };
    });

    res.json(formattedClickCounts);
  } catch (error) {
    console.error('Error fetching click counts:', error.message);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

connectToDatabase();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
