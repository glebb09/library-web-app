const router = require('express').Router();

const { getUsers, getUserById, createUser, updUser, deleteUserById } = require('../controllers/users');

router.get('/', getUsers);

router.get('/:id', getUserById);

router.post('/', createUser);

router.patch('/:id', updUser);

router.delete('/:id', deleteUserById);

module.exports = router;