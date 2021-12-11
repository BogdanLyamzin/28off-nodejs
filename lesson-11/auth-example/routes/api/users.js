const express = require("express");

const {authenticate, ctrlWrapper} = require("../../middlewares");
const {users: ctrl} = require("../../controllers");

const router = express.Router();

router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));
router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verify));

module.exports = router;