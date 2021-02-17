const express = require("express");
const auth = express.Router();
const Auth = require("../controllers/user");

auth.post("/signup", async (req, res, next) => {
  try {
    await Auth.signup(req, res);
  } catch (err) {
  }
});

auth.post("/login", async (req, res, next) => {
  try {
    Auth.login(req, res);
  } catch (err) {
    next(err);
  }
});
auth.post("/logout", async (req, res) => Auth.logout(req, res));

module.exports = auth;
