const express = require("express");
const router = express.Router();
const bankCtrl = require("../controllers/banks");

router.post("/new", bankCtrl.create);
router.get("/", bankCtrl.index);
router.get("/:id", bankCtrl.detail);
router.delete("/", bankCtrl.delete);
module.exports = router;
