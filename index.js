const express = require('express');  
const mongoose = require('mongoose'); 
const { MongoClient } = require('mongodb'); 

const app = express();
const port = 3000;

const mongoUrl = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.2';
const dbName = 'RESTbasics';
let db;

// Connect to MongoDB
const client = new MongoClient(mongoUrl);

client.connect()
  .then(() => {
    db = client.db(dbName);
    console.log('Connected to MongoDB');

    // Start the server after the DB connection is successful
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(err => console.error('Failed to connect to MongoDB', err));

// GET method to retrieve all programming languages
app.get('/programming-languages', async (req, res) => {
  try {
    const collection = db.collection('programming_languages');
    const programmingLanguages = await collection.find().toArray();
    res.status(200).json(programmingLanguages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch programming languages' });
  }
});

// Root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});
