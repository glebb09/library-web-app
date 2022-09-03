const express = require("express");
const router = express.Router();

const {
  getAuthors,
  createAuthor,
  updateAuthor,
  deleteAuthorById,
} = require("../controllers/authors.controller");
const { isAuthenticated, isAdmin } = require("../../../config/passport");

router.get("/", getAuthors);
router.post("/", isAdmin, createAuthor);
router.patch("/:id", isAdmin, updateAuthor);
router.delete("/:id", isAdmin, deleteAuthorById);

module.exports = router;
