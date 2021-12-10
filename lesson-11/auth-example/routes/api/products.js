const express = require("express");

const {authenticate, validation, ctrlWrapper} = require("../../middlewares")
const {joiSchema, updateActiveSchema} = require("../../models/product");
const {products: ctrl} = require("../../controllers")

const router = express.Router();

router.get("/", authenticate, ctrlWrapper(ctrl.getAll));

router.get("/:id", authenticate, ctrlWrapper(ctrl.getById))

router.post("/", authenticate, validation(joiSchema), ctrlWrapper(ctrl.add));

router.put("/:id", authenticate, validation(joiSchema), ctrlWrapper(ctrl.updateById))

router.patch("/:id", authenticate, validation(updateActiveSchema), ctrlWrapper(ctrl.updateActive))

router.delete("/:id", authenticate, ctrlWrapper(ctrl.removeById))

module.exports = router;