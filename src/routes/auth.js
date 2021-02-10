const express = require("express");
const auth = express.Router();
const Auth = require("../controllers/user");

auth.post("/signup", async (req, res) => {
  try {
    await Auth.signup(req, res);
  } catch (err) {
    console.log("Error: ", err);
  }
});

auth.post("/login", async (req, res) => Auth.login(req, res));
auth.post("/logout", async (req, res) => Auth.logout(req, res));

module.exports = auth;
