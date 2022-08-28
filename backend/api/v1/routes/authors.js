const express = require('express');
const router = express.Router();

const { getAuthors, getAuthorById, createAuthor, updAuthor, deleteAuthorById } = require('../controllers/authors');

router.get('/', getAuthors);

router.get('/:id', getAuthorById);

router.post('/', createAuthor);

router.patch('/:id', updAuthor);

router.delete('/:id', deleteAuthorById);

module.exports = router;
