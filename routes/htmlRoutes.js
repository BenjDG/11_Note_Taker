const path = require('path');
const router = require('express').Router();


router.get('*', (_req, res) => {
    //res.send(__dirname);
    res.sendFile(__dirname, '../public/index.html');
});

module.exports = router;