const fs = require('fs');
const path = require('path');

// notes variable


// GET method route
app.get('/api/notes', (req, res) => {
    res.send(notes)
})
  
// POST method route
  app.post('/api/notes', (req, res) => {
    res.send('POST request to the homepage')
})

// get notes with a specific id
app.get('/api/notes/:id', (req, res) => {
    const newNote = findById(req.params.id, notes);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    }
  });

// delete notes with a specific id


// display notes html page


// display index html 


// update json when a note is added or deleted