require("../db");
const mongoose = require("mongoose");
const Action = require("../models/action");

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
  const created = new Action(body);
  created.save(function (err) {
    if (err) return err;
  });
  console.log("Created Action in Service: ", created);
  return created;
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
