require("../db");
const mongoose = require("mongoose");
const Reference = require("../models/reference");

const all = async (uid) => {
  try {
    const data = await Project.find({ uid: uid }).exec();
    return data;
  } catch (err) {
    console.log(err.stack);
  }
};

const byId = async (id) => {
  try {
    const data = await Reference.findById(id).exec();
    return data;
  } catch (err) {
    console.log("Error: ", err);
  }
};

const create = async function (uid, body) {
  body.uid = uid
  console.log("BODY: ", body)
  const created = new Reference(body);
  created.save(function (err) {
    if (err) return err;
  });
  return created;
};

const update = async (id, update) => {
  try {
    const updated = await Reference.findOneAndUpdate({ _id: id }, update, {
      new: true,
    }).exec();
    return updated;
  } catch (err) {
    console.log("Error: ", err, stack);
  }
};

const destroy = async (id) => {
  Reference.deleteOne({ _id: id }, function (err, output) {
    if (err) return err;
    console.log("output of reference db op ", output);
  });
};

module.exports = {
  all: all,
  byId: byId,
  create: create,
  update: update,
  destroy: destroy,
};
