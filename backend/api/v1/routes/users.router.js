const express = require('express');
const router = express.Router();

const { getUsers, getUserById, createUser, updUser, deleteUserById, loginUser, profileUser } = require('../controllers/users.controller');
const { isAuthenticated } = require('../../../config/passport');

router.get('/', getUsers);

router.get('/:id', getUserById);

router.get('/profile', profileUser);

router.post('/', createUser);

router.post('/login', loginUser);

router.patch('/:id', isAuthenticated, updUser);

router.delete('/:id', isAuthenticated, deleteUserById);

module.exports = router;