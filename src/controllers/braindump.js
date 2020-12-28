require("../db");
const services = require("../services/braindump");
const mongoose = require("mongoose");

const all = async (req, res) => {
  try {
    const all = await services.all();
    res.status(200);
    res.json(all);
  } catch (err) {
    res.status(500);
    console.log(err.stack);
  }
};

const create = async function (req, res) {
  try {
    const body = req.body;
    const created = await services.create(body);
    res.json(created);
    res.status(201);
  } catch (err) {
    res.status(500);
  }
};

const destroy = async (req, res) => {
  try {
    const { braindump_id } = req.params;
    const destroyed = await services.destroy(braindump_id);
    res.status(200);
    res.json(destroyed);
    return destroyed;
  } catch (err) {
    res.status(500);
    console.log("Error: ", err);
  }
};

module.exports = {
  all: all,
  create: create,
  destroy: destroy,
};
