const express = require("express");
const router = express.Router();
const projectsController = require("../controllers/project");
const getActions = require("../controllers/action");

router.patch("/:project_id/edit", async (req, res) => {
  let { project_id } = req.params;
  let update = req.body;
  try {
    let project = await projectsController.updateProject(project_id, update);
    res.status(200);
    res.json(project);
  } catch (err) {
    console.log("Error: ", err);
    res.status(500);
  }
});

router.post("/create", async (req, res) => {
  try {
    const body = req.body;
    const project = await projectsController.createProject(body);
    res.status(200);
    res.json(project);
  } catch (err) {
    res.status(500);
  }
});

router.get("/:project_id/actions/create", async (req, res) => {
  try {
    await projectsController.createProject();
    res.status(200);
    res.json(actions);
  } catch (err) {
    console.log(err);
    res.status = 500;
  }
});

router.get("/:project_id/actions/:action_id", async (req, res) => {
  try {
    const actions = await getActions(req.params.id, req.body);
    res.status(200);
    res.json(actions);
  } catch (err) {
    console.log(err);
    res.status = 500;
  }
});

router.get("/", async (req, res) => {
  try {
    const projects = await projectsController.getProjects();
    res.json(projects);
    res.status = 200;
  } catch (err) {
    res.status(500);
  }
});
router.get("/:project_id", async (req, res) => {
  try {
    const { project_id } = req.params;
    const project = await projectsController.getProject(project_id);
    res.json(project);
    res.status = 200;
  } catch (err) {
    res.status(500);
  }
});

module.exports = router;
