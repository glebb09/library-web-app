const router = require('express').Router();

const { getBook, getBookById, createBook, updBook, deleteBookById } = require('../controllers/books');


router.get('/', getBook);

router.get('/:id', getBookById);

router.post('/', createBook);

router.patch('/:id', updBook);

router.delete('/:id', deleteBookById);

module.exports = router;