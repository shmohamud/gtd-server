const express = require("express");
const braindumps = express.Router();
const Braindump = require("../controllers/braindump");

braindumps.get("/", async (req, res) => Braindump.all(req, res));
braindumps.post("/", async (req, res) => Braindump.create(req, res));
braindumps.delete("/:braindump_id", async (req, res) => Braindump.destroy(req, res));

module.exports = braindumps;
