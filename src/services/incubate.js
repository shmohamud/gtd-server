require("../db");
const mongoose = require("mongoose");
const Incubate = require("../models/incubate");

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
    const data = await Incubate.findById(id).exec();
    return data;
  } catch (err) {
    console.log("Error: ", err);
  }
};

const create = async function (body) {
  body._id = new mongoose.Types.ObjectId();
  const created = new Incubate(body);
  created.save(function (err) {
    if (err) return err;
  });
  return created
};

const update = async (id, update) => {
  const filter = { _id: id };
  try {
    const updated = await Incubate.findOneAndUpdate(filter, update, {
      new: true,
    }).exec();
    return updated;
  } catch (err) {
    console.log("Error: ", err, stack);
  }
};

const destroy = async (id) => {
  const filter = { _id: id };
  try {
    const incubate = await Incubate.deleteOne(filter).exec();
    return incubate;
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
