const express = require("express");
const Review = require("../controllers/review");
const reviews = express.Router();

reviews.get("/", async (req, res) => Review.all(req,res))
reviews.get("/:review_id", async (req, res) => Review.byId(req, res))
reviews.post("/", async (req, res) => Review.create(req, res));
reviews.patch("/:review_id", async (req, res) => Review.update(req, res))
reviews.delete("/:review_id", async (req, res) => Review.destroy(req, res))

module.exports = reviews;
