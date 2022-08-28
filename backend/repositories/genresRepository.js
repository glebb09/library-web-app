const { Genre } = require('../models');

const findAll = () => {
  return Genre.findAll();
};

const findById = ( id ) => {
  return Genre.findByPk(id);
};

const create = ( genre ) => {
  let newGenre = new Genre(genre);
  return newGenre.save();
};

const updateGenre = (genre, id) => {
  let updGenre = {
    name: genre.name 
  };

  return Genre.update(updGenre, { where: { id: id } });
};

const deleteGenre = ( id ) => {
  return Genre.destroy({ where: { id: id } });
};

module.exports = {
  findAll,
  findById,
  create,
  updateGenre,
  deleteGenre
};