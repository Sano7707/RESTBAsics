const express = require('express');
const ProgrammingLanguage = require('../../examples/models/programmingLanguage'); // Our model
const router = express.Router();

router.get('/', async function(req, res) {
    if (Object.keys(req.query).length > 0) {
        return res.status(404).json({ message: 'Not Found' });
    }

    try {
        const languages = await ProgrammingLanguage.find();
        res.json(languages);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:name', async function(req, res) {
    try {
        const language = await ProgrammingLanguage.findOne({ name: req.params.name });
        if (!language) {
            return res.status(404).json({ message: 'Programming language not found' });
        }
        res.json(language);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.all('*', (req, res) => {
    res.status(404).json({ message: 'Not Found' });
});

module.exports = router;
