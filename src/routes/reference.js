const express = require("express");
const Reference = require("../controllers/reference");
const references = express.Router();
const {setCurrentUser} = require('../middleware')

references.get("/", async (req, res, next) => setCurrentUser(req, res, next), async (req, res) => Reference.all(req,res))
references.get("/:id", async (req, res, next) => setCurrentUser(req, res, next), async (req, res) => Reference.byId(req, res))
references.post("/", async (req, res, next) => setCurrentUser(req, res, next), async (req, res) => Reference.create(req, res));
references.patch("/:id", async (req, res, next) => setCurrentUser(req, res, next), async (req, res) => Reference.update(req, res))
references.delete("/:id", async (req, res, next) => setCurrentUser(req, res, next), async (req, res) => Reference.destroy(req, res))

module.exports = references;
