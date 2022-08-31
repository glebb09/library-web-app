const { findAll, findById, create, updateGenre, deleteGenre } = require('../../../repositories/genres.repository');

const getGenres = async (req, res) => {
  res.send( await findAll());
};

const getGenreById = async (req, res) => {
  res.send( await findById(req.params.id));
};

const createGenre = async (req, res) => {
  res.send( await create(req.body));
};

const updGenre = async (req, res) => {
  res.send( await updateGenre(req.body, +req.params.id));
};

const deleteGenreById = async (req, res) => {
  const result = await deleteGenre(+req.params.id);
  res.sendStatus(result == 0 ? 204 : 200);
};

module.exports = {
  getGenres,
  getGenreById,
  createGenre,
  updGenre,
  deleteGenreById
};
