const bookRepository = require("../../../repositories/books.repository");

const getBook = async (req, res) => {
  res.send(await bookRepository.findAllBooks());
};

const createBook = async (req, res) => {
  res.send(await bookRepository.createBook(req.body));
};

const updateBook = async (req, res) => {
  res.send(await bookRepository.updateBook(req.body, +req.params.id));
};

const deleteBookById = async (req, res) => {
  const result = await bookRepository.deleteBook(+req.params.id);
  res.send(result == 0 ? 204 : 200);
};

module.exports = {
  getBook,
  createBook,
  updateBook,
  deleteBookById,
};
