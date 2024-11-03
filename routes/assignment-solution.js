const express = require('express');
const router = express.Router();
const Framework = require('../models/framework');


// Mini-Assignment
// Get the all comments for a given tutorial
router.get('/tutorials/:tutorial/comments', async function(req, res) {
    try {
        const tutorial = req.params.tutorial;

        /* SOLUTION START */
        // Get all frameworks
        let frameworks = await Framework.find();
        // Loop through all frameworks
        for (framework of frameworks) {
            // Check if framework.tutorial.title is the tutorial we are looking for
            // In this case, send the framework.tutorial.comments array as a json object
            if (framework.tutorial.title === tutorial) {
                return res.json(framework.tutorial.comments);
            }
        }
        /* SOLUTION END */

        // Tutorial not found. Return a 404 error
        res.status(404).json({ message: 'Tutorial not found' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.all('*', (req, res) => {
    res.status(404).json({ message: 'Not Found' });
});

module.exports = router;
