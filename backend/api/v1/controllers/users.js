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

const loginUser = async (req, res) => [
  passport.authenticate('login', async (err, user) => {
    if ( err || !user ) { throw Error('An error occurred.') };

    req.login(req.email, req.password, { session: false }, async (error) => {
      if (error) return next(error);

      const body = { _id: user.id, email: user.email };
      const token = jwt.sign({ user: body }, 'TOP_SECRET');
      const jsonToken = json({ token });

      return res.send(jsonToken);
    })
  })
]


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
