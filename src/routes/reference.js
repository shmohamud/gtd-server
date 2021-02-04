const express = require("express");
const Reference = require("../controllers/reference");
const references = express.Router();

references.get("/", async (req, res) => Reference.all(req,res))
references.get("/:reference_id", async (req, res) => Reference.byId(req, res))
references.post("/", async (req, res) => Reference.create(req, res));
references.patch("/:reference_id", async (req, res) => Reference.update(req, res))
references.delete("/:reference_id", async (req, res) => Reference.destroy(req, res))

module.exports = references;
