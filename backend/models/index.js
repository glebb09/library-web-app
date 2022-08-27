const sequelize = require('../db');

const AuthorType = require('./Author');
const UserType = require('./User');
const OrderType = require('./Order');
const BookType = require('./Book');
const GenreType = require('./Genre');

const Author = sequelize.define('authors', AuthorType);
const User = sequelize.define('users', UserType);
const Order = sequelize.define('orders', OrderType);
const Book = sequelize.define('books', BookType);
const Genre = sequelize.define('genres', GenreType);

Genre.belongsToMany(Book, { through: "genres_books" });
Book.belongsToMany(Author, { through: "books_authors" });

sequelize.sync({ force: true });

module.exports = { 
  Author, 
  User,
  Order, 
  Book, 
  Genre
};