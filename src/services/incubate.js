require("../db");
const mongoose = require("mongoose");
const Incubate = require("../models/incubate");

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
    const data = await Incubate.findById(id).exec();
    return data;
  } catch (err) {
    console.log("Error: ", err);
  }
};

const create = async function (uid, body) {
  body.uid = uid
  const created = new Incubate(body);
  created.save(function (err) {
    if (err) return err;
  });
  return created
};

const update = async (id, update) => {
  try {
    const updated = await Incubate.findOneAndUpdate({ _id: id }, update, {
      new: true,
    }).exec();
    return updated;
  } catch (err) {
    console.log("Error: ", err, stack);
  }
};

const destroy = async (id) => {
    Incubate.deleteOne({ _id: id }, function (err, output) {
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
