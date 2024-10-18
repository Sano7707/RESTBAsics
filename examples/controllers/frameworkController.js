const express = require('express');
const router = express.Router();
const Framework = require('../models/Framework');


const getAllFrameworks = async (req, res) => {
    if (Object.keys(req.query).length > 0) {
        return res.status(404).json({ message: 'Not Found' });
    }

    try {
        const frameworks = await Framework.find().sort();
        res.json(frameworks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const addComment = async (req, res) => {
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

        res.status(201).json(tutorial); 
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};



const updateLink = async (req, res) => {
    try {
        const framework = await Framework.findById(req.params.id);
        if (!framework) {
            return res.status(404).json({ message: 'Framework not found' });
        }

        if (req.body.documentationLink) {
            framework.framework.documentationLink = req.body.documentationLink;
        }

        if (req.body.tutorialLink) {
            framework.tutorial.tutorialLink = req.body.tutorialLink;
        }

        const updatedFramework = await framework.save();

        res.json(updatedFramework);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {
    getAllFrameworks,
    addComment,
    updateLink
};
