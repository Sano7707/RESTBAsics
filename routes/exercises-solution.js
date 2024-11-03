const express = require('express');
const router = express.Router();
const ProgrammingLanguage = require('../models/programmingLanguage');


// Exercise 1: GET all documentation links for a language
router.get('/:language/docs', async function(req, res) {
    try {
        const lang = req.params.language;

        /* SOLUTION START */
        // GET a language by name
        // - Mongoose function to use: Model.findOne() (https://mongoosejs.com/docs/api/model.html#Model.findOne())
        // - Example from the documentation: await Adventure.findOne({ country: 'Croatia' }).exec();
        const language = await ProgrammingLanguage.findOne({ name: lang }).exec();
        // Send the "docs" array of the retrieved language as a json object
        res.json(language.docs);
        /* SOLUTION END */

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Exercise 2: GET all languages with a given paradigm
router.get('/:paradigm', async function(req, res) {
    try {
        const paradigm = req.params.paradigm;

        /* SOLUTION START */
        // GET all languages (hint: Example 1)
        const allLanguages = await ProgrammingLanguage.find();
        // Create an array to store the languages we are looking for
        let languages = [];
        // Loop through all languages
        for (lang of allLanguages) {
            // Check if lang.paradigm includes the paradigm we are looking for. In this case push "lang" into the array
            if (lang.paradigm.includes(paradigm)) {
                languages.push(lang);
            }
        }
        // Send the array as a json object
        res.json(languages);
        /* SOLUTION END */

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Exercise 3: POST the link to a documentation for a language
router.post('/:language/docs', async function(req, res) {
    const { link } = req.body;
    if (!link) {
        return res.status(400).json({ error: "link is required" });
    }

    try {
        /* SOLUTION START */
        // Find the right language (Model.findOne())
        let language = await ProgrammingLanguage.findOne({ name: req.params.language });
        // Push the link in the language.docs array
        language.docs.push(link);
        // Save the updated collection
        await language.save();

        /* SOLUTION END */
        res.status(201).json(language.docs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.all('*', (req, res) => {
    res.status(404).json({ message: 'Not Found' });
});

module.exports = router;
