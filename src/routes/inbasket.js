const express = require("express");
const Inbasket = require("../controllers/inbasket");
const inbaskets = express.Router();
const {setCurrentUser} = require('../middleware')

inbaskets.get("/", async (req, res, next) => setCurrentUser(req, res, next),async (req, res) => Inbasket.all(req, res));
inbaskets.post("/", async (req, res, next) => setCurrentUser(req, res, next), async (req, res) => Inbasket.create(req, res));
inbaskets.delete("/:id", async (req, res, next) => setCurrentUser(req, res, next), async (req, res) => Inbasket.destroy(req, res));

module.exports = inbaskets;
