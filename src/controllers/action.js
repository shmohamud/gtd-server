require("../db");
const mongoose = require("mongoose");
const services = require("../services/action");

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

const create = async (req, res) => {
 try {
    const data = await services.create(req.user.uid, req.body);
    res.json(data);
    res.status(201);
  } catch (err) {
    console.log("Error: ", err);
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  try {
    const updated = await services.update(id, req.body);
    res.status(200);
    res.json(updated);
  } catch (err) {
    res.status(500);
    console.log("Error: ", err);
  }
};

const destroy = async (req, res) => {
  const { id } = req.params;
  try {
    const destroyed = await services.destroy(id);
    res.status(200);
    res.json(destroyed);
    return destroyed;
  } catch (err) {
    res.status(500);
    console.log("Error: ", err);
  }
};

module.exports = { all, create, update, destroy };
