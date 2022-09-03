const router = require("express").Router();

const {
  getGenres,
  createGenre,
  updateGenre,
  deleteGenreById,
} = require("../controllers/genres.controller");
const { isAuthenticated, isAdmin } = require("../../../config/passport");

router.get("/", getGenres);
router.post("/", isAdmin, createGenre);
router.patch("/:id", isAdmin, updateGenre);
router.delete("/:id", isAdmin, deleteGenreById);

module.exports = router;
