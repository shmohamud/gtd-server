const express = require("express");
const actions = express.Router();
const Action = require("../controllers/action");

actions.get("/", async (req, res) => Action.all(req,res));
actions.post("/", async (req, res) => Action.create(req,res));
actions.patch("/:action_id", async (req, res) => Action.update(req, res))
actions.delete("/:action_id", async (req, res) => Action.destroy(req, res))



module.exports = actions;
