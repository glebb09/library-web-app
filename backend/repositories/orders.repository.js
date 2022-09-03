const { Order } = require("../models");

const findAllOrders = () => {
  return Order.findAll();
};

const findOrderById = (id) => {
  return Order.findByPk(id);
};

const createOrder = (order) => {
  let newOrder = new Order(order);
  return newOrder.save();
};

const updateOrder = (order, id) => {
  let updOrder = {
    order_date: order.order_date,
    return_date: order.return_date,
    note: order.note,
  };

  return Order.update(updOrder, { where: { id: id } });
};

const deleteOrder = (id) => {
  return Order.destroy({ where: { id: id } });
};

module.exports = {
  findAllOrders,
  findOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
