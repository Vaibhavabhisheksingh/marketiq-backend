require("dotenv").config();
const jwt = require("jsonwebtoken");

//console.log(process.env.JWT_SECRET);

module.exports.createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};