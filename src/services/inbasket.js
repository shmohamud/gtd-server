require("../db");
const mongoose = require("mongoose");
const Inbasket = require("../models/inbasket");

const all = async () => {
  try {
    const data = await Inbasket.find({}).exec();
    return data;
  } catch (err) {
    console.log("Error: ", err.stack);
  }
};

const create = async function (body) {
  console.log(body)
  body._id = new mongoose.Types.ObjectId();
  const created = new Inbasket(body);
  created.save(function (err) {
    if (err) return err;
  });
  return created
};

const destroy = async (id) => {
  const filter = { _id: id };
  try {
    const deleted = await Inbasket.deleteOne(filter).exec();
    return deleted
  } catch (err) {
    console.log("Error: ", err);
  }
};

module.exports = {
  all: all,
  create: create,
  destroy: destroy,
};
