const express = require("express");

const {validation, ctrlWrapper} = require("../../middlewares")
const {joiSchema, updateActiveSchema} = require("../../models/product");
const {products: ctrl} = require("../../controllers")

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", ctrlWrapper(ctrl.getById))

router.post("/", validation(joiSchema), ctrlWrapper(ctrl.add));

router.put("/:id", validation(joiSchema), ctrlWrapper(ctrl.updateById))

router.patch("/:id", validation(updateActiveSchema), ctrlWrapper(ctrl.updateActive))

router.delete("/:id", ctrlWrapper(ctrl.removeById))

module.exports = router;