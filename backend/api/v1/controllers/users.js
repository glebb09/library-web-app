const passport = require('passport');
const jwt = require('jsonwebtoken');

const { findAll, findById, findByEmail, create, updateUser, deleteUser } = require('../../../repositories/usersRepository');
const { json } = require('body-parser');

const getUsers = async (req, res) => {
  res.send( await findAll());
};

const getUserById = async (req, res) => {
  res.send( await findById(req.params.id))
}

const createUser = async (req, res) => {

  if (await findByEmail(req.body.email)) res.send({ message: "User with email already exist" });

  const { first_name, last_name, middle_name, email } = await create(req.body)
  res.send({  first_name, last_name, middle_name, email });
}

const updUser = async (req, res) => {
  res.send( await updateUser(req.body, +req.params.id));
}

const deleteUserById = async(req, res) => {
  const result =  await deleteUser(+req.params.id);
  res.send(result == 0 ? 204 : 200);
}

const loginUser = async (req, res) => {
  try {
    await passport.authenticate('local', (err, user) => {
      if (err) {
        return res.status(400).json({ errors: [err] });
      }
      if (!user) {
        throw 'Invalid email or password';
      } else {
        const payload = {
          id: user.id,
          email: user.email,
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET);
        res.status(200).json({ token });
      }
    })(req, res);
  } catch (error) {
    res.status(400).json({ errors: [error] });
  }
}
 

const profileUser = ( req, res ) => {
  res.json({
    message: 'You made it to the secure route',
    user: req.user,
    token: req.quety.secret_token
  })
};


module.exports = {
  getUsers,
  getUserById,
  createUser,
  updUser,
  deleteUserById,
  loginUser,
  profileUser
};
