const bcrypt = require("bcrypt");

const sequelize = require("../db");

const AuthorType = require("./Author");
const UserType = require("./User");
const OrderType = require("./Order");
const BookType = require("./Book");
const GenreType = require("./Genre");

const Author = sequelize.define("authors", AuthorType);
const User = sequelize.define("users", UserType, {
  hooks: {
    beforeCreate: async (user, options) => {
      const {
        dataValues: { password },
      } = user;
      user.dataValues.password = await bcrypt.hash(password, 10);
    },
  },
});
const Order = sequelize.define("orders", OrderType);
const Book = sequelize.define("books", BookType);
const Genre = sequelize.define("genres", GenreType);

Genre.belongsToMany(Book, { through: "genres_books" });
Book.belongsToMany(Genre, { through: "genres_books" });

Book.belongsToMany(Author, { through: "books_authors" });
Author.belongsToMany(Book, { through: "books_authors" });

User.hasMany(Order);
Order.belongsTo(User);

Order.belongsTo(Book);
Book.hasMany(Order);

sequelize.sync({ force: false });

module.exports = {
  Author,
  User,
  Order,
  Book,
  Genre,
};
