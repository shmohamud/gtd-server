const express = require("express");
const router = express.Router();
const Action = require("../controllers/project");

router.get("/", async function (req, res) {Action.all(req,res)});

module.exports = router;
