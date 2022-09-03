const router = require('express').Router();

const { getBook, getBookById, createBook, updBook, deleteBookById } = require('../controllers/books.controller');
const { isAuthenticated } = require('../../../config/passport');


router.get('/', getBook);
router.get('/:id', getBookById);
router.post('/', isAuthenticated ,createBook);
router.patch('/:id', isAuthenticated ,updBook);
router.delete('/:id', isAuthenticated ,deleteBookById);

module.exports = router;