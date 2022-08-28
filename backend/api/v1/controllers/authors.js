const { findAll, findById, create, updateAuthor, deleteById } = require('../../../repositories/authorsRepository');

const getAuthors = async (req, res) => {
  res.send( await findAll());
};

module.exports = {
  getAuthors
};

