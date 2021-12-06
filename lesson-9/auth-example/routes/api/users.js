const express = require("express");

const {upload, authenticate, ctrlWrapper} = require("../../middlewares");
const {users: ctrl} = require("../../controllers");

const router = express.Router();

router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));

router.patch("/avatars", authenticate, upload.single("avatarURL"), ctrlWrapper(ctrl.updateAvatar));

module.exports = router;