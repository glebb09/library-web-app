const express = require('express');
const router = express.Router();

const { getUsers, getUserById, createUser, updUser, deleteUserById, loginUser, profileUser } = require('../controllers/users');

router.get('/', getUsers);

router.get('/:id', getUserById);

router.get('/profile', profileUser);

router.post('/', createUser);

router.post('/login', loginUser);

router.patch('/:id', updUser);

router.delete('/:id', deleteUserById);

module.exports = router;