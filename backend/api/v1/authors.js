const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send("authors");
});

router.post('/', (req, res) => {
  res.send("Create authors");
});

router.patch('/:id', (req, res) => {
  res.send("Update authors");
});

router.delete('/:id', (req, res) => {
  res.send("Delete authors");
});

module.exports = router;
