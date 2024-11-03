const express = require('express');
const mongoose = require('mongoose');
const LangExamplesRoutes = require('./routes/examples');
const FrameworksExamplesRoutes = require('./routes/examples');
const exercisesRoutes = require('./routes/exercises');
const assignmentRoutes = require('./routes/assignment');


const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/RESTbasics')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

app.use('/api/programming-languages', LangExamplesRoutes);
app.use('/api/frameworks', FrameworksExamplesRoutes);
app.use('/languages', exercisesRoutes);
app.use('/frameworks', assignmentRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
