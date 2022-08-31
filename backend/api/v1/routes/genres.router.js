const router = require('express').Router();

const { getGenres, getGenreById, createGenre, updGenre, deleteGenreById } = require('../controllers/genres.controller');
const { isAuthenticated } = require('../../../config/passport');

router.get('/', getGenres);

router.get('/:id', getGenreById);

router.post('/', isAuthenticated, createGenre);

router.patch('/:id', isAuthenticated, updGenre);

router.delete('/:id', isAuthenticated, deleteGenreById);

module.exports = router;