const express = require('express');
const router = express.Router();

const {
    getAllFrameworks,
    addComment,
    updateLink
} = require('../controllers/frameworkController');

router.get('/', getAllFrameworks);

router.post('/:frameworkId/comments', addComment);

router.put('/:id', updateLink);

router.all('*', (req, res) => {
    res.status(404).json({ message: 'Not Found' });
});

module.exports = router;
