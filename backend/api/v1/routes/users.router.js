const express = require("express");
const router = express.Router();

const {
  getUsers,
  createUser,
  updateUser,
  updateSelf,
  deleteUserById,
  loginUser,
} = require("../controllers/users.controller");
const { isAuthenticated, isAdmin } = require("../../../config/passport");

router.get("/", isAdmin, getUsers);
router.post("/", createUser);
router.post("/login", loginUser);
router.patch("/updateSelf", isAuthenticated, updateSelf);
router.patch("/:id", isAdmin, updateUser);
router.delete("/:id", isAdmin, deleteUserById);

module.exports = router;
