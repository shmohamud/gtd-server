require("../db");
const mongoose = require("mongoose");
const Braindump = require("../models/braindump");

const all = async () => {
  try {
    const data = await Braindump.find({}).exec();
    return data;
  } catch (err) {
    console.log("Error: ", err.stack);
  }
};

const create = async function (body) {
  console.log(body)
  body._id = new mongoose.Types.ObjectId();
  const created = new Braindump(body);
  created.save(function (err) {
    if (err) return err;
  });
  return created
};

const destroy = async (id) => {
  console.log("DELETED BRAINDUMP OF ID: ", id)

  const filter = { _id: id };
  try {
    const deleted = await Braindump.deleteOne(filter).exec();
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
