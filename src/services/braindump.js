require("../db");
const mongoose = require("mongoose");
const Braindump = require("../models/braindump");

const all = async (uid) => {
  try {
    const data = await Braindump.find({ uid: uid }).exec();
    return data;
  } catch (err) {
    console.log("Error: ", err.stack);
  }
};

const create = async function (uid, body) {
  body.uid = uid;
  const created = new Braindump(body);
  created.save(function (err) {
    if (err) return err;
  });
  return created;
};

const destroy = async (id) => {
  Braindump.deleteOne({ _id: id }, function (err, output) {
    if (err) return err;
    console.log("output of braindump db op ", output);
  });
};

module.exports = {
  all: all,
  create: create,
  destroy: destroy,
};
