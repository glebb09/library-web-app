const genreRepository = require("../../../repositories/genres.repository");

const getGenres = async (req, res) => {
  res.send(await genreRepository.findAllGenres());
};

const createGenre = async (req, res) => {
  res.send(await genreRepository.createGenre(req.body));
};

const updateGenre = async (req, res) => {
  res.send(await genreRepository.updateGenre(req.body, +req.params.id));
};

const deleteGenreById = async (req, res) => {
  const result = await genreRepository.deleteGenre(+req.params.id);
  res.sendStatus(result == 0 ? 204 : 200);
};

module.exports = {
  getGenres,
  createGenre,
  updateGenre,
  deleteGenreById,
};
