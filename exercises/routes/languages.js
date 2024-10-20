const express = require('express');
const router = express.Router();
const ProgrammingLanguage = require('../../examples/models/programmingLanguage'); // Our model


router.get('/:language/docs', async function(req, res) {
    try {
        // Finds one document:
        // Model.findOne({ property: searchValue })

        const language = await ProgrammingLanguage.findOne({ name: req.params.language });
        res.json(language.docs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:paradigm', async function(req, res) {
    try {
        // Finds documents:
        // Model.find({ property: { $in: [searchValue] } })

        const languages = await ProgrammingLanguage.find({ paradigm: { $in: [req.params.paradigm] } })
        res.json(languages);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.all('*', (req, res) => {
    res.status(404).json({ message: 'Not Found' });
});

module.exports = router;
