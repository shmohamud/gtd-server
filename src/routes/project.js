const express = require("express");
const Project = require("../controllers/project");
const projects = express.Router();
const {setCurrentUser} = require('../middleware')

projects.use((req, res, next)=>{
    console.log (req, res);
    setCurrentUser(req, res, next)
}) 

projects.get("/", async (req, res) => Project.all(req,res))
projects.get("/:id", async (req, res) => Project.byId(req, res))
projects.post("/", async (req, res) => Project.create(req, res));
projects.patch("/:id", async (req, res) => Project.update(req, res))
projects.delete("/:id", async (req, res) => Project.destroy(req, res))

module.exports = projects;
