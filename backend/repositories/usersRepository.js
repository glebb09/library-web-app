const { User } = require('../models');

const findAll = () => {
  return User.findAll();
}

const findById = (id) => {
  return User.findByPk(id);
}

const create = ( user ) => {
  let newUser = new User(user);
  return newUser.save();
}

const updateUser = ( user, id ) => {
  let updUser = {
    first_name: user.first_name,
    last_name: user.last_name,
    middle_name: user.middle_name,
    email: user.email,
    password: user.password,
    role: user.role,
    email_confirm_hash: user.email_confirm_hash,                //this
    registration_date: user.registration_date,                  //this
    last_login_date: user.last_login_date
  };

  return User.update(updUser, { where: { id: id } });
}

const deleteUser = ( id ) => {
  return User.destroy({where: { id: id }});
}

module.exports = {
  findAll,
  findById,
  create,
  updateUser,
  deleteUser
};