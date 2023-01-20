const express = require("express");
const userController = require("../../controller/users.js");
const { validateData } = require("../../middlewares/validator.js");
const { userValidate } = require("../../utils/validator.js")

const router = express.Router();

router.post("/signup", validateData(userValidate), userController.register);

router.get("/", userController.getAll);

module.exports = router;
