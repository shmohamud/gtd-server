require("../db");
const mongoose = require("mongoose");
const Project = require("../models/project");

const all = async (uid) => {
  try {
    const data = await Project.find({uid:uid}).exec();
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

const create = async function (uid, body) {
  body.uid = uid;
  const created = new Project(body);
  created.save(function (err) {
    if (err) return err;
  });
  return created;
};

const update = async (id, update) => {
  try {
    const updated = await Project.findOneAndUpdate({ _id: id }, update, {
      new: true,
    }).exec();
    return updated;
  } catch (err) {
  console.log("Error: ", err)
  }
};

const destroy = async (id) => {
  Project.deleteOne({ _id: id }, function (err, output) {
    if (err) return err;
  });
};

module.exports = {
  all: all,
  byId: byId,
  create: create,
  update: update,
  destroy: destroy,
};
