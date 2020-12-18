const express = require("express");
const actions = express.Router();
const Action = require("../controllers/action");

actions.get("/", async (req, res) => Action.all(req,res));
actions.patch("/:action_id", async (req, res) => Action.update(req, res))


module.exports = actions;
