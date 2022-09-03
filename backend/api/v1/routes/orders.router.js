const router = require('express').Router();

const { getOrders, getOrderById, createOrder, updOrder, deleteOrderById } = require('../controllers/orders.controller');
const { isAuthenticated, isLabrarian, isAdmin } = require('../../../config/passport');

router.get('/', getOrders);
router.get('/:id', getOrderById);
router.post('/', isAuthenticated, isLabrarian, createOrder);
router.patch('/:id', isAuthenticated, updOrder);
router.delete('/:id', isAuthenticated, deleteOrderById);

module.exports = router;