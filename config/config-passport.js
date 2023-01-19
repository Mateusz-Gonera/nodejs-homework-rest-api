const passport = require("passport");
const passportJWT = require("passport-jwt");
const User = require("../service/schemas/user.js");
require("dotenv").config();
const secret = process.env.SECRET;

const extractJWT = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;

const params = {
  secretOrKey: secret,
  jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken(),
};

const x = passport.use(
  new Strategy(params, async (payload, done) => {
    try {
      const user = await User.findById(payload.id);
      if (!user) return done(new Error("User not found"));
      if (user) {
        return done(null, user);
      }
    } catch (err) {
      return done(err);
    }
  })
);
