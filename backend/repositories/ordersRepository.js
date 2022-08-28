const { Order } = require('../models');

const findAll = () => {
  return Order.findAll();
};

const findById = (id) => {
  return Order.findByPk(id);
};

const create = ( order ) => {
  let newOrder = new Order(order);
  return newOrder.save();
};

const updateOrder = ( order, id ) => {
  let updOrder = {
    order_date: order.order_date,
    return_date: order.return_date,
    note: order.note
  };

  return Order.updOrder( updOrder, { where: { id: id }});
};

const deleteOrder = ( id ) => {
  return Order.destroy({ where: {id: id} });
};

module.exports = {
  findAll,
  findById,
  create,
  updateOrder,
  deleteOrder
};

