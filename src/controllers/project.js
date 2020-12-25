 require("../db");
const services = require("../services/project");
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

const byId = async (req, res) => {
  const { project_id } = req.params;
  try {
    const data = await services.byId(project_id);
    res.status(200);
    res.json(data);
    return data;
  } catch (err) {
    res.status(500)
    console.log("Error: ", err);
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

const update = async (req, res) => {
  const { project_id } = req.params;
  const update = req.body;
  try {
    const updated = await services.update(project_id, update);
    res.status(200);
    res.json(updated);
  } catch (err) {
    res.status(500)
    console.log("Error: ", err);
  }
};

const destroy = async (req, res) => {
  try {
    const { project_id } = req.params;
    const destroyed = await services.destroy(project_id);
    res.status(200);
    res.json(destroyed);
    return destroyed;
  } catch (err) {
    res.status(500)
    console.log("Error: ", err);
  }
};

module.exports = {
  all: all,
  byId: byId,
  create: create,
  update: update,
  destroy: destroy,
};
