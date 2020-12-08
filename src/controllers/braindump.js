require("../db");
const mongoose = require("mongoose");
const Braindump = require("../models/braindump");

const createBraindump = async function (braindump) {
  braindump._id = mongoose.Types.ObjectId();
  await Braindump.create(braindump, async function (err) {
    if (err) {
      console.log("Error: ", err);
    }
    console.log("Successfully created");
  });
};

const getBraindumps = async () => {
  const braindumps = await Braindump.find({});
  return braindumps;
};

const getBraindump = async (id) => {
  const braindump = await Braindump.findById(id);
  return braindump;
};

module.exports = {
  createBraindump: createBraindump,
  getBraindumps: getBraindumps,
  getBraindump: getBraindump,
};
