const express = require("express");

const {validation, ctrlWrapper} = require("../../middlewares")
const joiSchema = require("../../schemas/product");
const {products: ctrl} = require("../../controllers")

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", ctrlWrapper(ctrl.getById))

router.post("/", validation(joiSchema), ctrlWrapper(ctrl.add));

router.put("/:id", validation(joiSchema), ctrlWrapper(ctrl.updateById))

router.delete("/:id", ctrlWrapper(ctrl.removeById))

module.exports = router;