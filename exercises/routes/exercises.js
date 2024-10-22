const express = require('express');
const router = express.Router();
const ProgrammingLanguage = require('../../examples/models/programmingLanguage'); // Our model
const Framework = require('../../examples/models/framework');
const langFramework = require('../../examples/models/langFramework');


// Get all documentation for a language
router.get('/:language/docs', async function(req, res) {
    try {
        // YOUR CODE
        // To find one document in mongoose: Model.findOne({ property: searchValue })

        const language = await ProgrammingLanguage.findOne({ name: req.params.language });
        res.json(language.docs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get all languages with a given paradigm
router.get('/:paradigm', async function(req, res) {
    try {
        // YOUR CODE
        // To get all documents of a collection in mongoose: Model.find()
        // Get all programming languages
        const allLanguages = await ProgrammingLanguage.find();
        // Create a list to store the languages we are looking for
        let languages = [];
        // Push into languages the documents whos "paradigm" array include the request parameter
        for (lang of allLanguages) {
            if (lang.paradigm.includes(req.params.paradigm)) {
                languages.push(lang);
            }
        }
        // Return the languages array as json
        res.json(languages);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a link to a documentation for a language
router.post('/:language/docs', async function(req, res) {
    const { link } = req.body;
    if (!link) {
        return res.status(400).json({ error: "link is required" });
    }

    try {
        // YOUR CODE
        // Get the right language
        const language = await ProgrammingLanguage.findOne({ name: req.params.language });
        // Push the link in the language.docs array
        language.docs.push(link);
        // Save the updated collection
        await language.save();

        res.status(201).json(language.docs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// Assignement
// Get the all frameworks for a language
router.get('/:language/frameworks', async function(req, res) {
    try {
        // YOUR CODE
        // Get the frameworks for the given language from the langFramework collection
        let frameworks = await langFramework.findOne({ language: req.params.language });
        // Extract the list of frameworks
        frameworks = frameworks.frameworks;

        let frameworksDetails = [];
        // Get frameworks details from the Framework collection
        for (framework of frameworks) {
            let f = await Framework.findOne({ name: framework });
            frameworksDetails.push(f);
        }

        res.json(frameworksDetails);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.all('*', (req, res) => {
    res.status(404).json({ message: 'Not Found' });
});

module.exports = router;
