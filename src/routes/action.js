const express = require("express");
const actions = express.Router();
const Action = require("../controllers/action");
const {setCurrentUser} = require('../middleware')

actions.use((req, res, next)=>{
    console.log("IN ACTIONS route middware");
    setCurrentUser(req, res, next)
}) 

actions.get("/", async (req, res) => Action.all(req, res));
actions.post("/", async (req, res) => Action.create(req, res));
actions.patch("/:id", async (req, res) => Action.update(req, res));
actions.delete("/:id", async (req, res) => Action.destroy(req, res));

module.exports = actions;
