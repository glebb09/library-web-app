const { Book } = require('../models');

const findAll = () => {
  return Book.findAll();
}

const findById = ( id ) => {
  return Book.findByPk( id );
}

const create = ( book ) => {
  let newBook = new Book(book);
  return newBook.save();
}

const updateBook = ( book, id ) => {
  let updBook = {
    name: book.name,
    description: book.description,
    publishing_year: book.publishing_year,
    pages_count: book.pages_count
  };

  return Book.update(updBook, { where: { id: id } });
}

const deleteBook = ( id ) => {
  return Book.destroy({where: { id: id }});
}

module.exports = {
  findAll,
  findById,
  create,
  updateBook,
  deleteBook
};