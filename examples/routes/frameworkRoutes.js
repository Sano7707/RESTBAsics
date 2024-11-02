const express = require('express');
const router = express.Router();

router.get('/', async function(req, res) {
    if (Object.keys(req.query).length > 0) {
        return res.status(404).json({ message: 'Not Found' });
    }

    try {
        const frameworks = await Framework.find();
        res.json(frameworks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/:frameworkId/comments', async function(req, res) {
    const { frameworkId } = req.params;
    const { user, comment } = req.body;

    try {
        const framework = await Framework.findById(frameworkId);
        if (!framework) {
            return res.status(404).json({ message: 'Framework not found' });
        }

        const tutorial = framework.tutorial;

        if (!tutorial) {
            return res.status(404).json({ message: 'Tutorial not found' });
        }

        tutorial.comments.push({ user, comment, date: new Date() });

        await framework.save();

        res.status(201).json(framework);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const framework = await Framework.findById(req.params.id);
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
