require("../db");
const mongoose = require("mongoose");
const Project = require("../models/project");

const all = async () => {
  try {
    const data = await Project.find({}).exec();
    return data;
  } catch (err) {
    console.log(err.stack);
  }
};

const byId = async (id) => {
  try {
    const data = await Project.findById(id).exec();
    return data;
  } catch (err) {
    console.log("Error: ", err);
  }
};

const create = async function (body) {
  body._id = new mongoose.Types.ObjectId();
  const created = new Project(body);
  console.log("Created ", created);
  created.save(function (err) {
    if (err) return err;
  });
};

const update = async (id, update) => {
  const filter = { _id: id };
  try {
    const updated = await Project.findOneAndUpdate(filter, update, {
      new: true,
    }).exec();
    return updated;
  } catch (err) {
    console.log("Error: ", err, stack);
  }
  return project;
};

const destroy = async (id) => {
  const filter = { _id: id };
  try {
    const project = await Project.deleteOne(filter).exec();
    return project;
  } catch (err) {
    console.log("Error: ", err);
  }
};

module.exports = {
  all: all,
  byId: byId,
  create: create,
  update: update,
  destroy: destroy,
};
