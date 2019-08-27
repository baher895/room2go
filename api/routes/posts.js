const express = require("express");
const router = express.Router();
const { post } = require("../controllers");

router.post("/", post.post);
router.get("/:id", post.get);
router.patch("/:id", post.patch);
router.delete("/:id", post.remove);

module.exports = router;
