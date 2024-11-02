const express = require('express');
const ProgrammingLanguage = require('../models/programmingLanguage');
const Framework = require('../models/framework');
const router = express.Router();

// Example 1: GET all programming languages
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

// Example 2: GET a programming language by name
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

// Example 3: POST a new comment to a framework identified by its name
router.post('/:frameworkName/comments', async function(req, res) {
    try {
        const framework = await Framework.findOne({ name: req.params.frameworkName });
        if (!framework) {
            return res.status(404).json({ message: 'Framework not found' });
        }

        const tutorial = framework.tutorial;
        if (!tutorial) {
            return res.status(404).json({ message: 'Tutorial not found' });
        }

        const { user, comment } = req.body;
        tutorial.comments.push({ user, comment, date: new Date() });
        await framework.save();

        res.status(201).json(framework);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Example 4: PUT update the documentation and/or tutorial links of a framework
router.put('/:name', async (req, res) => {
    try {
        const framework = await Framework.findOne({ name: req.params.name });
        if (!framework) {
            return res.status(404).json({ message: 'Framework not found' });
        }

        if (req.body.documentationLink) {
            framework.documentationLink = req.body.documentationLink;
        }

        if (req.body.tutorialLink) {
            framework.tutorial.tutorialLink = req.body.tutorialLink;
        }

        const updatedFramework = await framework.save();

        res.json({ message: 'Links updated successfully', framework: updatedFramework });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.all('*', (req, res) => {
    res.status(404).json({ message: 'Not Found' });
});

module.exports = router;
