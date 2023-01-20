const { User } = require("../service/schemas/user.js");
const service = require("../service/users.js");

const getAll = async (req, res, next) => {
  try {
    const results = await User.find();
    res.status(200).json(results);
  } catch (err) {
    console.error(err.message);
    next(err);
  }
};

const register = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await service.getUserByEmail({ email });

  if (user) return res.status(409).json({ message: "Email in use" });

  try {
      const newUser = new User({ email });
    newUser.setPassword(password);
    await newUser.save();
    res.status(201).json({
      user: {
        email,
        subscription: "starter",
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { register, getAll };
