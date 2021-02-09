const express = require("express");
const Incubate = require("../controllers/incubate");
const incubates = express.Router();
const {setCurrentUser} = require('../middleware')

incubates.get("/", async (req, res, next) => setCurrentUser(req, res, next), async (req, res) => Incubate.all(req,res))
incubates.get("/:id", async (req, res, next) => setCurrentUser(req, res, next), async (req, res) => Incubate.byId(req, res))
incubates.post("/", async (req, res, next) => setCurrentUser(req, res, next), async (req, res) => Incubate.create(req, res));
incubates.patch("/:id", async (req, res, next) => setCurrentUser(req, res, next), async (req, res) => Incubate.update(req, res))
incubates.delete("/:id", async (req, res, next) => setCurrentUser(req, res, next), async (req, res) => Incubate.destroy(req, res))

module.exports = incubates;
