const express = require("express");
const Project = require("../controllers/project");
const Action = require("../controllers/action")
const projects = express.Router();

projects.get("/", async (req, res) => Project.all(req,res))
projects.get("/:project_id", async (req, res) => Project.byId(req, res))
projects.post("/", async (req, res) => Project.create(req, res));
projects.post("/:project_id/actions", async (req, res) => Action.create(req, res));
projects.patch("/:project_id", async (req, res) => Project.update(req, res))
projects.delete("/:project_id", async (req, res) => Project.destroy(req, res))

module.exports = projects;
