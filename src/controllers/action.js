require("../db");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const services = require('../services/action');


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
  const action = req.body  
  action._id = new ObjectId();
  const project_id = req.params.project_id || false
    try {
     const data = await services.create(project_id, action)
     res.json(data)
     res.status(200)
  }catch(err){
    console.log("Error: ", err)
  }

  }



module.exports = { create: create, all:all };
