const express = require('express');
const mongoose = require('mongoose');
const programmingLanguagesRoutes = require('./routes/programmingLanguageRoutes');

const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/RESTbasics')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

app.use('/api/programming-languages', programmingLanguagesRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
