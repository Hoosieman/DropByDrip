// server.js
const express = require('express');
const app = express();
const port = 3000;

const { MongoClient } = require('mongodb');
const mongoUrl = 'mongodb+srv://123:123@coleto.mt5dxlu.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'coleto';

app.use(express.json());

app.post('/saveEmail', async (req, res) => {
    const email = req.body.email;

    try {
        const client = new MongoClient(mongoUrl, { useUnifiedTopology: true });
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('emails');
        const result = await collection.insertOne({ email });
        console.log('Email inserted successfully:', result.ops[0]);
        client.close();
        res.status(200).send('Email saved successfully');
    } catch (error) {
        console.error('Error inserting email:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
