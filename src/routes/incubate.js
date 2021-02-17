const express = require("express");
const Incubate = require("../controllers/incubate");
const incubates = express.Router();
const {setCurrentUser} = require('../middleware')

incubates.use((req, res, next)=>{
    setCurrentUser(req, res, next)
}) 

incubates.get("/", async (req, res) => Incubate.all(req,res))
incubates.get("/:id", async (req, res) => Incubate.byId(req, res))
incubates.post("/", async (req, res) => Incubate.create(req, res));
incubates.patch("/:id", async (req, res) => Incubate.update(req, res))
incubates.delete("/:id", async (req, res) => Incubate.destroy(req, res))

module.exports = incubates;


