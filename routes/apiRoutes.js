const router = require('express').Router();
//const { application } = require('express');
const storage = require('../db/storage');


router.get('/api/notes', (req, res) => {
    readFile("./db/db.json", "utf8").then(function(data) {
        notes = [].concat(JSON.parse(data))
        res.json(notes);
    })
});


/*router.get('/notes', (req, res) => {
  storage
    .getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});*/



/*router.post('/notes', (req, res) => {
  storage
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});*/


router.post('/api/notes', (req, res) => {
    const note = req.body;
  readFileAsync("./db/db.json", "utf8").then(function(data) {
      const notes = [].concat(JSON.parse(data));
      notes.push(note);
      return notes
}).then(function(notes){
    writeFile("./db/db.json", JSON.stringify(notes))
    res.json(note);
})})



module.exports = router;
