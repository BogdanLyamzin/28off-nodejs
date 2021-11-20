const express = require("express");

const {products: ctrl} = require("../../controllers");

const router = express.Router();

router.get("/", ctrl.getAll);

router.post("/", ctrl.add);

module.exports = router;