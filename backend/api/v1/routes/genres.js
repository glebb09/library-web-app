const router = require('express').Router();

const { getGenres, getGenreById, createGenre, updGenre, deleteGenreById } = require('../controllers/genres');

router.get('/', getGenres);

router.get('/:id', getGenreById);

router.post('/', createGenre);

router.patch('/:id', updGenre);

router.delete('/:id', deleteGenreById);

module.exports = router;