const router = require('express').Router();

const { getOrders, getOrderById, createOrder, updOrder, deleteOrderById } = require('../controllers/orders');

router.get('/', getOrders);

router.get('/:id', getOrderById);

router.post('/', createOrder);

router.patch('/:id', updOrder);

router.delete('/:id', deleteOrderById);

module.exports = router;