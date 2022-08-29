const router = require('express').Router();

const authors = require('./authors');
const books = require('./books');
const genres = require('./genres');
const orders = require('./orders');
const users = require('./users');

router.use('/api/v1/authors', authors);
router.use('/api/v1/books', books);
router.use('/api/v1/genre', genres);
router.use('/api/v1/orders', orders);
router.use('/api/vi/users', users);

module.exports = router;