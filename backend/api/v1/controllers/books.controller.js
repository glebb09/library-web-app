const { findAll, findById, create, updateBook, deleteBook } = require('../../../repositories/books.repository'); 

const getBook = async ( req, res ) => {
  res.send( await findAll());
};

const getBookById = async(req, res) => {
  res.send( await findById(req.params.id));
};

const createBook = async (req, res) => {
  res.send( await create(req.body));
};

const updBook = async (req, res) => {
  res.send( await updateBook(req.body, +req.params.id));
};

const deleteBookById = async (req, res) => {
  const result = await deleteBook(+req.params.id);
  res.send(result == 0 ? 204 : 200);
};

module.exports = {
  getBook,
  getBookById,
  createBook,
  updBook,
  deleteBookById
};

