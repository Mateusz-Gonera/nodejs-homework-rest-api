const { User } = require("./schemas/user.js");

const getUser = async (id) => User.findById(id);

const getUserByEmail = async (email) => User.findOne(email);

module.exports = { getUser, getUserByEmail };
