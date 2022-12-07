const express = require("express");
const router = express.Router();
import * as reviewCtrl from "../controllers/review";

router.post("/new", reviewCtrl.create);
router.get("/", reviewCtrl.index);
router.get("/:id", reviewCtrl.detail);
router.delete("/", reviewCtrl.delete);
module.exports = router;
