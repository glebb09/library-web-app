const { findAll, findById, create, updateOrder, deleteOrder } = require('../../../repositories/ordersRepository');

const getOrders = async (req, res) => {
  res.send( await findAll());
}

const getOrderById = async (req, res) => {
  res.send( await findById(res.params.id));
};

const createOrder = async ( req, res ) => {
  res.send( await create(req.body));
};

const updOrder = async (req, res) => {
  res.send( await updateOrder(req.body, req.params.id));
};

const deleteOrderById = async (req, res) => {
  res.send( await deleteOrder(req.params.id));
};

module.exports = {
  getOrders,
  getOrderById,
  createOrder, 
  updOrder,
  deleteOrder
};
