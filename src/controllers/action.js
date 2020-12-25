require("../db");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const services = require("../services/action");

const all = async (req, res) => {
  try {
    const actions = await services.all();
    res.status(200);
    res.json(actions);
  } catch (err) {
    res.status(500);
    console.log(err.stack);
  }
};

const create = async function (req, res) {
  const action = req.body;
  action._id = new ObjectId();
  const project_id = req.params.project_id || false;
  try {
    const data = await services.create(project_id, action);
    res.json(data);
    res.status(200);
  } catch (err) {
    console.log("Error: ", err);
  }
};

const update = async (req, res) => {
  const { action_id } = req.params;
  const update = req.body;
  try {
    const updated = await services.update(action_id, update);
    res.status(200);
    res.json(updated);
  } catch (err) {
    res.status(500);
    console.log("Error: ", err);
  }
};


const destroy = async (req, res) => {
  const { action_id } = req.params;
  try {
    const destroyed = await services.destroy(action_id);
    res.status(200);
    res.json(destroyed);
    return destroyed
  } catch (err) {
    res.status(500)
    console.log("Error: ", err);
  }
};

module.exports = { create: create, all: all, update: update, destroy:destroy };
