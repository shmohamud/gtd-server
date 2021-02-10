require("../db");
const services = require("../services/inbasket");
const mongoose = require("mongoose");

const all = async (req, res) => {
  try {
    const data = await services.all(req.user.uid);
    res.status(200);
    res.json(data);
  } catch (err) {
    res.status(500);
    console.log(err.stack);
  }
};

const create = async function (req, res) {
  try {
    const created = await services.create(req.user.uid, req.body);
    res.json(created);
    res.status(201);
  } catch (err) {
    res.status(500);
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const destroyed = await services.destroy(id);
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
