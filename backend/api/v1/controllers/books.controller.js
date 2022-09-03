const bookRepository = require('../../../repositories/books.repository'); 

const getBook = async ( req, res ) => {
  res.send( await bookRepository.findAllBooks());
};

const getBookById = async(req, res) => {
  res.send( await bookRepository.findBookById(req.params.id));
};

const createBook = async (req, res) => {
  res.send( await bookRepository.createBook(req.body));
};

const updBook = async (req, res) => {
  res.send( await bookRepository.updateBook(req.body, +req.params.id));
};

const deleteBookById = async (req, res) => {
  const result = await bookRepository.deleteBook(+req.params.id);
  res.send(result == 0 ? 204 : 200);
};

module.exports = {
  getBook,
  getBookById,
  createBook,
  updBook,
  deleteBookById
};

