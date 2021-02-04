require("../db");
const mongoose = require("mongoose");
const Action = require("../models/action");
const Project = require("../models/project");

const all = async () => {
  try {
    const data = await Action.find({}).exec();
    return data;
  } catch (err) {
    console.log(err.stack);
  }
};

const byId = async (id) => {
  try {
    const data = await Action.findById(id).exec();
    return data;
  } catch (err) {
    console.log("Error: ", err);
  }
};

const create = async function (action) {
  //Create the action
  console.log("CREATE RESULT IN ACTION SERVICES: ", action)
  const created = await Action.create([action], async function (err) {
    if (err) {
      console.log("Error: ", err);
    }
  }, {new:true});
  return action;
};

const update = async (id, update) => {
  const filter = { _id: id };
  try {
    const updated = await Action.findOneAndUpdate(filter, update, {
      new: true,
    }).exec();
    return updated;
  } catch (err) {
    console.log("Error: ", err);
  }
};

const destroy = async (id) => {
  const action_id = mongoose.Types.ObjectId(id);
  var ObjectId = mongoose.Types.ObjectId;
  const filter = { _id: ObjectId(id) };

  Action.deleteOne(filter, function (err, output) {
    if(err) return err
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
