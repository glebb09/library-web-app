const { DataTypes } = require("sequelize");

const User = {
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  middle_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  role: {
    type: DataTypes.ENUM("admin", "librarian", "visitor"),
    allowNull: false,
  },

  email_confirm_hash: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  last_login_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
};

module.exports = User;
