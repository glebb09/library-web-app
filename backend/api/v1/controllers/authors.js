const { findAll, findById, create, updateAuthor, deleteById } = require('../../../repositories/authorsRepository');

const getAuthors = async (req, res) => {
  res.send( await findAll());
};

const getAuthorById = async (req, res) => {
  res.send( await findById(req.params.id))
}

const createAuthor = async (req, res) => {
  res.send( await create(req.body));
}

const updAuthor = async (req, res) => {
  res.send( await updateAuthor(req.body, +req.params.id));
}

const deleteAuthorById = async(req, res) => {
  const result = await deleteById(+req.params.id);
  res.sendStatus(result == 0 ? 204 : 200);
}

module.exports = {
  getAuthors,
  getAuthorById,
  createAuthor,
  updAuthor,
  deleteAuthorById
};

