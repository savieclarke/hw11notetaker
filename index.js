const express = require('express');
const path = require('path');
const storage = require('./db/storage');


// Initialize the app and create a port
const app = express();
const PORT = ('5502');


const apiRoutes = require('./routes/apiRoutes');

const htmlRoutes = require('./routes/htmlRoutes');
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);


//middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));







//API ROUTES

/*app.get('/api/notes', (req, res) => {
    readFile("./db/db.json", "utf8").then(function(data) {
        notes = [].concat(JSON.parse(data))
        res.json(notes);
    })
});*/

  /*app.post('/api/notes', (req, res) => {
      const note = req.body;
    readFileAsync("./db/db.json", "utf8").then(function(data) {
        const notes = [].concat(JSON.parse(data));
        notes.push(note);
        return notes
  }).then(function(notes){
      writeFile("./db/db.json", JSON.stringify(notes))
      res.json(note);
  })})*/

// listening
app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`)
})



