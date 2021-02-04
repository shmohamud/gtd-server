require("../db");
const mongoose = require("mongoose");
const Reference = require("../models/reference");

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
    const data = await Reference.findById(id).exec();
    return data;
  } catch (err) {
    console.log("Error: ", err);
  }
};

const create = async function (body) {
  const created = new Reference(body);
  created.save(function (err) {
    if (err) return err;
  });
  return created
};

const update = async (id, update) => {
  const filter = { _id: id };
  try {
    const updated = await Reference.findOneAndUpdate(filter, update, {
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
    const reference = await Reference.deleteOne(filter).exec();
    return reference;
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
