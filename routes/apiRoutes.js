const path = require('path');
const router = require('express').Router();

//console.log(__dirname);

router.get('*', (_req, res) => {
    //res.sendFile(path.join(__dirname, ''))
});

module.exports = router;