const router = require('express').router();
const fs = require("fs");
const path = require(path);
const db = require(db);

router.get('/index.js', (req, res) => {
    let results = notes;
    if (req.query) {
      results = filterByQuery(req.query, results);
    }
    res.json(results);
  });

  router.get('/index.js/', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    }
  });

  router.post('/index.js', (req, res) => {
    req.body.id = animals.length.toString();
  
    if (!validatenote(req.body)) {
      res.status(400)
    } else {
      const animal = createNewNote(notes);
      res.json(note);
    }
  });