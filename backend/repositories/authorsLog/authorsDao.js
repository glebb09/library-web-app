const Author = require('../../models/Author');

const authorsDao = {
  findAll: findAll,
  create: create,
  findById: findById,
  deleteById: deleteById,
  updateAuthor: updateAuthor
};

const findAll = () => {
  return Author.findAll();
}

const findById = ( id ) => {
  return Author.findByPk(id);
}

const deleteById = ( id ) => {
  return Author.destroy({ where: {id: id} });
}

const create = ( author ) => {
  let newAuthor = new Author(author);
  return newAuthor.save();
}

const updateAuthor = ( author, id) => {
  let updAuthor = {
    first_name: author.first_name,
    last_name: author.last_name,
    middle_name: author.middle_name
  };

  return Author.update(updAuthor, { where: { id: id} });
}

module.exports = authorsDao;