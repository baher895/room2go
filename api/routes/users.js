const express = require("express");
const router = express.Router();
const { user } = require("../controllers");

router.post("/", user.post);
router.get("/:id", user.get);
router.patch("/:id", user.patch);
router.delete("/:id", user.remove);

module.exports = router;
