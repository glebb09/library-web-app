const { DataTypes } = require('sequelize');

const Genre = {

  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}

module.exports = Genre;