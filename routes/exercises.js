const express = require('express');
const router = express.Router();
const ProgrammingLanguage = require('../models/programmingLanguage');


// Exercise 1: GET all documentation links for a language
router.get('/:language/docs', async function(req, res) {
    try {
        const lang = req.params.language;

        /* TO DO START */
        // GET a language by name
        // - Mongoose function to use: Model.findOne() (https://mongoosejs.com/docs/api/model.html#Model.findOne())
        // - Example from the documentation: await Adventure.findOne({ country: 'Croatia' }).exec();
        // ...

        // Send the "docs" array of the retrieved language as a json object
        // ...
        /* TO DO END */

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Exercise 2: GET all languages with a given paradigm
router.get('/:paradigm', async function(req, res) {
    try {
        const paradigm = req.params.paradigm;
        /* TO DO START */
        // GET all languages (hint: Example 1)
        // ...

        // Create an array to store the languages we are looking for
        // ...

        // Loop through all languages
        for (lang of allLanguages) {
            // Check if lang.paradigm includes the paradigm we are looking for. In this case push "lang" into the array
            // ...
        }
        // Send the languages array as a json object
        // ...
        /* TO DO END */

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.all('*', (req, res) => {
    res.status(404).json({ message: 'Not Found' });
});

module.exports = router;
