const { Author } = require('../models');

const findAllAuthors = () => {
  return Author.findAll();
}

const findAuthorById = ( id ) => {
  return Author.findByPk(id);
}

const deleteAuthorById = ( id ) => {
  return Author.destroy({ where: {id: id} });
}

const createAuthor = ( author ) => {
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

module.exports = {
  findAllAuthors,
  findAuthorById,
  deleteAuthorById,
  createAuthor,
  updateAuthor
};