const express = require('express')
const mongoose = require('mongoose');
const app = express();

const url = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.2';
const port = 3000;


app.get('/', (req, res) => {
    res.send('Hello World!')
})


/**
 * Configure mongoose
 */
app.locals.db = mongoose.connect(url, { serverApi: { version: '1', strict: true, deprecationErrors: true } })
    .then ( () => {
        console.log("Connected to Database");

        app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
    });