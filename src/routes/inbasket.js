const express = require("express");
const Inbasket = require("../controllers/inbasket");
const inbaskets = express.Router();

inbaskets.get("/", async (req, res) => Inbasket.all(req, res));
inbaskets.post("/", async (req, res) => Inbasket.create(req, res));
inbaskets.delete("/:inbasket_id", async (req, res) => Inbasket.destroy(req, res));

module.exports = inbaskets;
