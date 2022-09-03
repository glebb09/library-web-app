const { User } = require("../models");

const findAllUsers = () => {
  return User.findAll();
};

const findUserById = (id) => {
  return User.findByPk(id);
};

const findUserByEmail = (email) => {
  return User.findOne({ where: { email: email } });
};

const createUser = (user) => {
  const { first_name, last_name, middle_name, email, password } = user;
  let newUser = new User({
    first_name,
    last_name,
    middle_name,
    email,
    password,
    role: "visitor",
    last_login_date: new Date(),
  });
  return newUser.save();
};

const updateUser = (user, id) => {
  const { first_name, last_name, middle_name } = user;

  let updUser = {
    first_name: first_name,
    last_name: last_name,
    middle_name: middle_name,
  };

  return User.update(updUser, { where: { id: id } });
};

const deleteUser = (id) => {
  return User.destroy({ where: { id: id } });
};

module.exports = {
  findAllUsers,
  findUserById,
  findUserByEmail,
  createUser,
  updateUser,
  deleteUser,
};
