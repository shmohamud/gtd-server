 require("../db");
const services = require("../services/project");
const mongoose = require("mongoose");

const all = async (req, res) => {
  try {
    const data= await services.all(req.user.uid);
    res.status(200);
    res.json(data);
  } catch (err) {
    res.status(500);
    console.log(err.stack);
  }
};

const byId = async (req, res) => {
  const { id } = req.params;
  console.log("byIdddddddddddd: ", id)
  try {
    const data = await services.byId(id);
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
    const created = await services.create(req.user.uid, body);
    res.json(created);
    res.status(201);
  } catch (err) {
    res.status(500);
    console.log("Error: ", err);
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const update = req.body;
  console.log("id: ", id, "body: ", update)
  console.log("Update  !!! byIdddddddddddd: ", id, "Update req.boxy: ", update)

  try {
    const updated = await services.update(id, update);
    res.status(200);
    res.json(updated);
  } catch (err) {
    res.status(500)
    console.log("Error: ", err);
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
