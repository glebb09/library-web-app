const { DataTypes } = require('sequelize');

const Order = {

  id_user: {
    type: DataTypes.BIGINT,       // this
    allowNull: false
  },

  id_book: {
    type: DataTypes.BIGINT,
    allowNull: false
  },

  order_date: {
    type: DataTypes.DATE,           // this, with time zone
    //defaultValue: DataTypes.TIME,
    allowNull: false
  },

  return_date: {
    type: DataTypes.DATE,
    allowNull: true
  },

  note: {
    type: DataTypes.STRING,
    allowNull: true
  }
}

module.exports = Order;