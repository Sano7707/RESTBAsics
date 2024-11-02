const express = require('express');
const mongoose = require('mongoose');
const examplesRoutes = require('./routes/examples');
const exercisesRoutes = require('./routes/exercises');


const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/RESTbasics')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

app.use('/api/programming-languages', examplesRoutes);
app.use('/api/frameworks', examplesRoutes);
app.use('/languages', exercisesRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
