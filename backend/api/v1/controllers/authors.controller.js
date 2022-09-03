const authorRepository = require("../../../repositories/authors.repository");

const getAuthors = async (req, res) => {
  res.send(await authorRepository.findAllAuthors());
};

const createAuthor = async (req, res) => {
  res.send(await authorRepository.createAuthor(req.body));
};

const updateAuthor = async (req, res) => {
  res.send(await authorRepository.updateAuthor(req.body, +req.params.id));
};

const deleteAuthorById = async (req, res) => {
  const result = await authorRepository.deleteAuthorById(+req.params.id);
  res.sendStatus(result == 0 ? 204 : 200);
};

module.exports = {
  getAuthors,
  createAuthor,
  updateAuthor,
  deleteAuthorById,
};
