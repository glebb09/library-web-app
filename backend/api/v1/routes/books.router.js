const router = require("express").Router();

const {
  getBook,
  getBookById,
  createBook,
  updateBook,
  deleteBookById,
} = require("../controllers/books.controller");
const { isAuthenticated, isAdmin } = require("../../../config/passport");

router.get("/", getBook);
router.post("/", isAdmin, createBook);
router.patch("/:id", isAdmin, updateBook);
router.delete("/:id", isAdmin, deleteBookById);

module.exports = router;
