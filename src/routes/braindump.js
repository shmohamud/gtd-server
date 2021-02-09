const express = require("express");
const braindumps = express.Router();
const Braindump = require("../controllers/braindump");
const {setCurrentUser} = require("../middleware")

braindumps.get("/", async (req, res, next) => setCurrentUser(req, res, next), async (req, res) => Braindump.all(req, res));
braindumps.get("/:id", async (req, res, next) => setCurrentUser(req, res, next), async (req, res) => Braindump.all(req, res));
braindumps.post("/", async (req, res, next) => setCurrentUser(req, res, next), async (req, res) => Braindump.create(req, res));
braindumps.delete("/:id", async (req, res) => setCurrentUser(Braindump.destroy(req, res)));

module.exports = braindumps;
