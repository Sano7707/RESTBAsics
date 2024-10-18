const express = require('express');
const router = express.Router();
const {
    getAllLanguages,
    getLanguageById
} = require('../controllers/programmingLanguageController');

router.get('/', getAllLanguages);

router.get('/:id', getLanguageById);

router.all('*', (req, res) => {
    res.status(404).json({ message: 'Not Found' });
});

module.exports = router;
