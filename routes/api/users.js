const express = require("express");
const userController = require("../../controller/users.js");
const { validateData } = require("../../middlewares/validator.js");
const { userValidate } = require("../../utils/validator.js");
const { auth } = require("../../middlewares/authorizationJwt.js");
const { upload } = require("../../middlewares/upload");
const { editAvatar } = require("../../middlewares/editAvatar.js");

const router = express.Router();

router.post("/signup", validateData(userValidate), userController.register);

router.post("/login", validateData(userValidate), userController.login);

router.get("/logout", auth, userController.logout);

router.get("/current", auth, userController.current);

router.patch("/", auth, userController.updateSub);

router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  editAvatar(),
  userController.updateAvatar
);

// router.get("/", userController.getAll);

module.exports = router;
