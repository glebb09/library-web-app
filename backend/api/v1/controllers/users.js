const { findAll, findById, create, updateUser, deleteUser } = require('../../../repositories/usersRepository');

const getUsers = async (req, res) => {
  res.send( await findAll());
};

const getUserById = async (req, res) => {
  res.send( await findById(req.params.id))
}

const createUser = async (req, res) => {
  res.send( await create(req.body));
}

const updUser = async (req, res) => {
  res.send( await updateUser(req.body, req.params.id));
}

const deleteUserById = async(req, res) => {
  res.send( await deleteUser(req.params.id));
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updUser,
  deleteUserById
};
