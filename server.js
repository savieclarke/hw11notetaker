const express = require('express');
const path = require('path');
const storage = require('./db/storage');



const apiRoutes = require('./routes/apiRoutes');
app.use('/api', apiRoutes);

const htmlRoutes = require('./routes/htmlRoutes');
app.use('/', htmlRoutes);


// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 5502;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));





//HTML ROUTES



  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '../public/index.html'));
  });



//API ROUTES

app.get('/api/notes', (req, res) => {
    readFile("./db/db.json", "utf8").then(function(data) {
        notes = [].concat(JSON.parse(data))
        res.json(notes);
    })
});

  app.post('/api/notes', (req, res) => {
      const note = req.body;
    readFileAsync("./db/db.json", "utf8").then(function(data) {
        const notes = [].concat(JSON.parse(data));
        notes.push(note);
        return notes
  }).then(function(notes){
      writeFile("./db/db.json", JSON.stringify(notes))
      res.json(note);
  })})

// listening
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));




module.exports = router;
