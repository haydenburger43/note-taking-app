const router = require('express').router();
const fs = require("fs");
const path = require(path);
const db = require(db);

router.get('/notes', (req, res) => {
    let results = notes;
    if (req.query) {
      results = filterByQuery(req.query, results);
    }
    res.json(results);
  });

  router.get('/notes/', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    }
  });

  router.post('/notes', (req, res) => {
  
    if (!validatenote(req.body)) {
      res.status(400)
    } else {
      const note = createNewNote(notes);
      res.json(note);
    }
  });