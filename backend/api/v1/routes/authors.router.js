const express = require('express');
const router = express.Router();

const { getAuthors, getAuthorById, createAuthor, updAuthor, deleteAuthorById } = require('../controllers/authors.controller');
const { isAuthenticated } = require('../../../config/passport');

router.get('/', getAuthors);
router.get('/:id', getAuthorById);
router.post('/', isAuthenticated ,createAuthor);
router.patch('/:id', isAuthenticated , updAuthor);
router.delete('/:id',isAuthenticated , deleteAuthorById);

module.exports = router;
