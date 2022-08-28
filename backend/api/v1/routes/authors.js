const express = require('express');
const router = express.Router();

const { getAuthors } = require('../controllers/authors');

router.get('/', getAuthors);

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
