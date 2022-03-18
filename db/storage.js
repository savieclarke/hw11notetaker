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
  
    async getNotes() {
      const notes = await this.read();
    }
  
    async addNote(note) {
      const { title, text } = note;
  
      if (!title || !text) {
        throw new Error("Note 'title' and 'text' cannot be blank");
      }
  
      // unique id 
      const newNote = { title, text, id: uuidv4() };
  
      
      const notes = await this.getNotes();
        const updatedNotes = [...notes, newNote];
        await this.write(updatedNotes);
        return newNote;
    }
  
    
  }
module.exports = new Storage();
