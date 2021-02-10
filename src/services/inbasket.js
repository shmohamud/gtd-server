require("../db");
const mongoose = require("mongoose");
const Inbasket = require("../models/inbasket");

const all = async (uid) => {
  try {
    const data = await Inbasket.find({uid:uid}).exec();
    return data;
  } catch (err) {
    console.log("Error: ", err.stack);
  }
};

const create = async function (uid, body) {
  body.uid = uid
  const created = new Inbasket(body);
  created.save(function (err) {
    if (err) return err;
  });
  return created;
};

const destroy = async (id) => {
  Inbasket.deleteOne({ _id: id }, function (err, output) {
    if (err) return err;
    console.log("output of inbasket db op ", output);
  });
};

module.exports = {
  all: all,
  create: create,
  destroy: destroy,
};
