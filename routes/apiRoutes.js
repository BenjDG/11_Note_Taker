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
    res.end();
});

router.delete('/notes/:id', (req, res) => {
    fs.readFile(path.join(__dirname, '../db/db.json'), (err, data) => {
        if (err) throw err;
        const json = JSON.parse(data);
        const result = json.filter(note => {
            if (note.id === req.params.id) {
                const index = json.indexOf(note);
                json.splice(index, 1)
                fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(json), (err) => {
                    if (err) throw err;
                    console.log('The item has been removed!');
                })
            }
        })
    });
    res.end();
});

module.exports = router;