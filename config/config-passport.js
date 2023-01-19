const passport = require("passport");
const passportJWT = require("passport-jwt");
// import User;
require("dotenv").config();
const secret = process.env.SECRET;

const extractJWT = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;

const params = {
    secretOrKey: secret,
    jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken(),
};

