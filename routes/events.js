const express = require("express");
const router = express.Router();
const eventCtrl = require("../controllers/events");

router.post("/new", eventCtrl.create);
router.get("/", eventCtrl.index);
router.get("/:id", eventCtrl.detail);
router.delete("/", eventCtrl.delete);
module.exports = router;
