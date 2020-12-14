require("../db");
const mongoose = require("mongoose");
const Action = require("../models/action");
const Project = require("../models/project")
const all = async () => {
  try {
    const data = await Action.find({}).exec();
    return data;
  } catch (err) {
    console.log(err.stack);
  }
};

const byId = async (id) => {
  try {
    const data = await Project.findById(id).exec();
    return data;
  } catch (err) {
    console.log("Error: ", err);
  }
};

const create = async function (id, action) {
    if(id){
    await Action.create(action, function (err) {
      if (err) {
        console.log("Error: ", err);
      }
    });
  
  try {
    let project = await Project.findOneAndUpdate(
      { _id: id},
      {
        $push: {
          actions: {
            _id: action._id,
            type: action.type,
            completed: false,
            description: action.description,
            setting: action.setting,
          },
        },
      },
      {
        new: true,
        useFindAndModify: false,
      }
    );
    return project;
  } catch (err) {
    console.log("Error: ", err);
  }
}
else {
    const created = await Action.create(action, function (err) {
        if (err) {
          console.log("Error: ", err);
        }
        return created
      });
}
  };


const update = async (id, update) => {
    const filter = {_id: id}
  try {
    const updated = await Project.findOneAndUpdate(filter, update, {
      new: true,
    }).exec();
    return updated
  } catch (err) {
    console.log("Error: ", err, stack);
  }
  return project;
};

const destroy = async (id) => {
  const filter = { _id: id };
  try {
    const project = await Project.deleteOne(filter).exec();
    return project;
  } catch (err) {
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
