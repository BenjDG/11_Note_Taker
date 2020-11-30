const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (_req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
});

router.post('/notes', (req, res) => {
    req.body.id = uuidv4();
    fs.readFile(path.join(__dirname, '../db/db.json'), (err, data) => {
        if (err) throw err;
        if (data.length !== 0) {
            const json = JSON.parse(data);
            json.push(req.body);
            fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(json), (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
            })
        }
        else {
            const json = [];
            json.push(req.body);
            fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(json), (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
            })
        }
    })
    res.redirect('/notes');
});

router.delete('/notes/:id', (req, res) => {

    // Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.

});




module.exports = router;