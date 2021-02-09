const express = require("express");
const users = express.Router();
const User = require("../controllers/user");
const {setCurrentUser} = require('../middleware')

users.get("/", async (req, res, next) => setCurrentUser(req, res, next), async (req, res) => User.all(req, res));

module.exports = users;
