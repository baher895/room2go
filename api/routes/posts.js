const express = require("express");
const router = express.Router();
const { post } = require("../controllers");

router.get("/", post.getAll);
router.post("/", post.post);
router.get("/:id", post.getOne);
router.patch("/:id", post.patch);
router.delete("/:id", post.remove);

module.exports = router;
