const express = require("express");

const {validation, ctrlWrapper} = require("../../middlewares");
const {auth: ctrl} = require("../../controllers");
const {joiSchema} = require("../../models/user");

const router = express.Router();

router.post("/register", validation(joiSchema), ctrlWrapper(ctrl.register));
// router.post("/signup")

router.post("/login", validation(joiSchema), ctrlWrapper(ctrl.login));
// router.post("/signin")
module.exports = router;