require("../db");
const mongoose = require("mongoose");
const Project = require("../models/project");

const createProject = async function (project) {
  project._id = mongoose.Types.ObjectId();
  try {
    await Project.create(project).exec();
  } catch (err) {
    console.log("Error: ", err.stack);
  }
};

const getProjects = async () => {
  try {
    const projects = await Project.find({}).exec();
    return projects;
  } catch (err) {
    console.log(err.stack);
  }
};

const getProject = async (id) => {
  const project = await Project.findById(id).exec();
  return project;
};

const updateProject = async (id, update) => {
  const filter = { _id: id };
  try {
    const project = await Project.findOneAndUpdate(filter, update, {
      new: true,
    }).exec();
    return project;
  } catch (err) {
    console.log("Error: ", err, stack);
  }
  return project;
};

module.exports = {
  createProject: createProject,
  getProjects: getProjects,
  getProject: getProject,
  updateProject: updateProject,
};
