const router = require('express').Router();

const { getOrders, getOrderById, createOrder, updOrder, deleteOrderById } = require('../controllers/orders.controller');
const { isAuthenticated } = require('../../../config/passport');

router.get('/', getOrders);

router.get('/:id', getOrderById);

router.post('/', isAuthenticated, createOrder);

router.patch('/:id', isAuthenticated, updOrder);

router.delete('/:id', isAuthenticated, deleteOrderById);

module.exports = router;