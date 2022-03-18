const util = require('util');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);


class Storage {
    read() {
      return readFile('db/db.json', 'utf8');
    }
  
    write(note) {
      return writeFile('db/db.json', JSON.stringify(note));
    }
  
    getNotes() {
      return this.read().then((notes) => {
       
      });
    }
  
    addNote(note) {
      const { title, text } = note;
  
      if (!title || !text) {
        throw new Error("Note 'title' and 'text' cannot be blank");
      }
  
      // unique id 
      const newNote = { title, text, id: uuidv1() };
  
      // Get all notes, add the new note, write all the updated notes, return the newNote
      return this.getNotes()
        .then((notes) => [...notes, newNote])
        .then((updatedNotes) => this.write(updatedNotes))
        .then(() => newNote);
    }
  
    
  }
module.exports = router;
