const passport = require("passport");
const jwt = require("jsonwebtoken");

const usersRepository = require("../../../repositories/users.repository");

const getUsers = async (req, res) => {
  res.send(await usersRepository.findAllUsers());
};

const createUser = async (req, res) => {
  if (await usersRepository.findUserByEmail(req.body.email))
    res.send({ message: "User with email already exist" });

  const { first_name, last_name, middle_name, email } =
    await usersRepository.createUser(req.body);
  res.send({ first_name, last_name, middle_name, email });
};

const updateUser = async (req, res) => {
  res.send(await usersRepository.updateUser(req.body, +req.params.id));
};

const updateSelf = async (req, res) => {
  res.send(await usersRepository.updateUser(req.body, req.user.id));
};

const deleteUserById = async (req, res) => {
  const result = await usersRepository.deleteUser(+req.params.id);
  res.send(result == 0 ? 204 : 200);
};

const loginUser = async (req, res) => {
  try {
    await passport.authenticate("local", (err, user) => {
      if (err) {
        return res.status(400).json({ errors: [err] });
      }
      if (!user) {
        throw "Invalid email or password";
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
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  updateSelf,
  deleteUserById,
  loginUser,
};
