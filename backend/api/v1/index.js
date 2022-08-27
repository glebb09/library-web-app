const router = require('express').Router();
const authors = require('./authors');

router.use('/api/v1/authors', authors);

module.exports = router;