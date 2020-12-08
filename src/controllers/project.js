require("../db");
const mongoose = require("mongoose");
const Project = require("../models/project");

const createProject = async function (project) {
  project._id = mongoose.Types.ObjectId();
  await Project.create(project, async function (err) {
    if (err) {
      console.log("Error: ", err);
    }
    console.log("Successfully created");
  });
};

const getProjects = async () => {
  const projects = await Project.find({});
  return projects;
};

const getProject = async (id) => {
  const project = await Project.findById(id);
  return project;
};

module.exports = {
  createProject: createProject,
  getProjects: getProjects,
  getProject: getProject,
};
