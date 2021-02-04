const express = require("express");
const Incubate = require("../controllers/incubate");
const incubates = express.Router();

incubates.get("/", async (req, res) => Incubate.all(req,res))
incubates.get("/:incubate_id", async (req, res) => Incubate.byId(req, res))
incubates.post("/", async (req, res) => Incubate.create(req, res));
incubates.patch("/:incubate_id", async (req, res) => Incubate.update(req, res))
incubates.delete("/:incubate_id", async (req, res) => Incubate.destroy(req, res))

module.exports = incubates;
