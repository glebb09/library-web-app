const { DataTypes } = require('sequelize');

const Book = {

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  description: {
    type: DataTypes.STRING,
    allowNull: false
  },

  publishing_year: {
    type: DataTypes.DATE,
    allowNull: false
  },

  pages_count: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}

module.exports = Book;