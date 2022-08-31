const router = require('express').Router();

const authors = require('./authors.router');
const books = require('./books.router');
const genres = require('./genres.router');
const orders = require('./orders.router');
const users = require('./users.router');

router.use('/api/v1/authors', authors);
router.use('/api/v1/books', books);
router.use('/api/v1/genre', genres);
router.use('/api/v1/orders', orders);
router.use('/api/v1/users', users);

module.exports = router;