const fs = require('fs');
const path = require('path');

// notes variable
fs.readFile("db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    var notes = JSON.parse(data);


// GET method route
app.get('/api/notes', (req, res) => {
    res.send(notes)
    })
  
// POST method route
app.post('/api/notes', (req, res) => {
    let newNote = req.body;
    notes.push(newNote);
    updateDb();
    return console.log('Added new note: '+newNote.title)
    })

// get notes with a specific id
app.get('/api/notes/:id', (req, res) => {
    res.json(notes[req.params.id]);
    });

// delete notes with a specific id
app.delete("/api/notes/:id", (req, res) {
    notes.splice(req.params.id, 1);
    updateDb();
    console.log("Deleted not with id "+req.params.id);
    });
});
// display notes html page


// display index html 


// update json when a note is added or deleted