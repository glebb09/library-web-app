const router = require("express").Router();

const {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrderById,
} = require("../controllers/orders.controller");
const {
  isAuthenticated,
  isLabrarian,
  isAdmin,
} = require("../../../config/passport");

router.get("/", isLabrarian, getOrders);
router.post("/", isLabrarian, createOrder);
router.patch("/:id", isLabrarian, updateOrder);
router.delete("/:id", isAuthenticated, deleteOrderById);

module.exports = router;
