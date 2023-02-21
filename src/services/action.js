require("../db");
const mongoose = require("mongoose");
const Action = require("../models/action");
const Project = require("../models/project");

const all = async (uid) => {
  try {
    const data = await Action.find({ uid: uid }).exec();
    return data;
  } catch (err) {
    console.log(err.stack);
  }
};

const byId = async (actionId) => {
  try {
    const data = await Action.findById(actionId).exec();
    return data;
  } catch (err) {
    console.log("Error: ", err);
  }
};

const create = async function (uid, body) {
  body.uid = uid;
  const projectId = body.project_id;
  const created = new Action(body);
  created.save(function (err) {
    if (err) return err;
  });
  return Project.findByIdAndUpdate(
    projectId,
    {
      $push: {
        actions: {
          description: created.description,
          type: created.type,
          complete: created.complete,
          queued: created.queued,
          waitingFor: created.waitingFor,
          setting: created.setting,
          priority: created.priority
        },
      },
    },
    { new: true, useFindAndModify: false }
  );
};

const update = async (id, update) => {
  try {
    const updated = await Action.findOneAndUpdate({ _id: id }, update, {
      new: true,
    }).exec();
    return updated;
  } catch (err) {
    console.log("Error: ", err);
  }
};

const destroy = async (id) => {
  Action.deleteOne({ _id: id }, function (err, output) {
    if (err) return err;
    console.log("output of action db op ", output);
  });
};

module.exports = {
  all: all,
  byId: byId,
  create: create,
  update: update,
  destroy: destroy,
};
