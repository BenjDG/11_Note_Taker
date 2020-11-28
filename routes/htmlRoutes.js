const path = require('path');
const router = require('express').Router();

router.get('/notes', (_req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
    console.log(__dirname);
});

router.get('*', (_req, res) => {
    //res.send(__dirname);
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;