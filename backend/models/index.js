const sequelize = require('../db');

const AuthorType = require('./Author');

const Author = sequelize.define('authors', AuthorType);
sequelize.sync({ force: true });

module.exports = { Author };