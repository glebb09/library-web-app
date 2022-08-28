const { DataTypes } = require('sequelize');

const Order = {

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