const fs = require('fs');
const path = require('path');

module.exports = app => {

// notes variable
    fs.readFile("db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        var notes = JSON.parse(data);

    // GET method route
        app.get('/api/notes', function(req, res) {
            res.json(notes)
        })
    
    // POST method route
        app.post('/api/notes', function(req, res) {
            let newNote = req.body;
            notes.push(newNote);
            updateDb();
        return console.log('Added new note: '+newNote.title)
        })

    // get notes with a specific id
        app.get('/api/notes/:id', function(req, res) {
            res.json(notes[req.params.id]);
        });

    // delete notes with a specific id
        app.delete("/api/notes/:id", function(req, res) {
            notes.splice(req.params.id, 1);
            updateDb();
            console.log("Deleted not with id "+req.params.id);
        });

    // display notes html page
        app.get('/notes', function(req,res) {
            res.sendFile(path.join(__dirname, "../public/notes.html"));
        });

    // display index html 
        app.get('*', function(req,res) {
            res.sendFile(path.join(__dirname, "../public/index.html"));
        });

    // update json when a note is added or deleted
        function updateDb() {
            fs.writeFile("db/db.json",JSON.stringify(notes,'\t'),err => {
                if (err) throw err;
                return true;
            });
        }
    });
}