const ProgrammingLanguage = require('../models/programmingLanguage');

const getAllLanguages = async (req, res) => {
    if (Object.keys(req.query).length > 0) {
        return res.status(404).json({ message: 'Not Found' });
    }

    try {
        const languages = await ProgrammingLanguage.find();
        res.json(languages);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getLanguageById = async (req, res) => {
    try {
        const language = await ProgrammingLanguage.findById(req.params.id);
        if (!language) {
            return res.status(404).json({ message: 'Programming language not found' });
        }
        res.json(language);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAllLanguages,
    getLanguageById
};
