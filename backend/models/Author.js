const { DataTypes } = require('sequelize');

const Author = {

  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  last_name: {
    type: DataTypes.STRING,
    allowNull: true
  },

  middle_name: {
    type: DataTypes.STRING,
    allowNull: true 
  }

};

module.exports = Author;