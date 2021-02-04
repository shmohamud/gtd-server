require("../db");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const services = require("../services/action");
const action = require("../models/action");

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

  let action = req.body
  action._id = new ObjectId();
  console.log("ACTION IN CREATE CONTROLLER: ", action)
  try {
    const data = await services.create(action);
    console.log("DB PROCESSED ACTION IN CREATE CONTROLLER: ", data)
    res.json(data);
    res.status(201);
  } catch (err) {
    console.log("Error: ", err);
  }
};

const update = async (req, res) => {
  const { action_id } = req.params;
  const update = req.body;
  console.log("IN UPDATE : ", "BODY: ", req.body, "ID: ",action_id )

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
    return destroyed;
  } catch (err) {
    res.status(500);
    console.log("Error: ", err);
  }
};

module.exports = { create: create, all: all, update: update, destroy: destroy };
