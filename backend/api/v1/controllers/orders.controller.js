const orderRepository = require('../../../repositories/orders.repository');

const getOrders = async (req, res) => {
  res.send( await orderRepository.findAllOrders());
}

const getOrderById = async (req, res) => {
  res.send( await orderRepository.findOrderById(req.params.id));
};

const createOrder = async ( req, res ) => {
  console.log("Role user", req);
  
  res.send( await orderRepository.createOrder(req.body));
};

const updOrder = async (req, res) => {
  res.send( await orderRepository.updateOrder(req.body, +req.params.id));
};

const deleteOrderById = async (req, res) => {
  const result = await orderRepository.deleteOrder(+req.params.id);
  res.send(result == 0 ? 204 : 200);
};

module.exports = {
  getOrders,
  getOrderById,
  createOrder, 
  updOrder,
  deleteOrderById
};
