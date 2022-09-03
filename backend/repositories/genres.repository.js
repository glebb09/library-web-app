const { Genre } = require("../models");

const findAllGenres = () => {
  return Genre.findAll();
};

const findGenreById = (id) => {
  return Genre.findByPk(id);
};

const createGenre = (genre) => {
  let newGenre = new Genre(genre);
  return newGenre.save();
};

const updateGenre = (genre, id) => {
  let updGenre = {
    name: genre.name,
  };

  return Genre.update(updGenre, { where: { id: id } });
};

const deleteGenre = (id) => {
  return Genre.destroy({ where: { id: id } });
};

module.exports = {
  findAllGenres,
  findGenreById,
  createGenre,
  updateGenre,
  deleteGenre,
};
