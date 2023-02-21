require("../db");
const mongoose = require("mongoose");
const Review = require("../models/review");

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
    const data = await Review.findById(id).exec();
    return data;
  } catch (err) {
    console.log("Error: ", err);
  }
};

const create = async function (uid, body) {
  body.uid = uid;
  const created = new Review(body);
  created.save(function (err) {
    if (err) return err;
  });
  return created;
};

const update = async (id, update) => {
  try {
    const updated = await Review.findOneAndUpdate({ _id: id }, update, {
      new: true,
    }).exec();
    return updated;
  } catch (err) {
    console.log("Error: ", err, "Stack trace: ", stack);
  }
};

const destroy = async (id) => {
  Review.deleteOne({ _id: id }, function (err, output) {
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
