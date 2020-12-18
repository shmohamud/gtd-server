require("../db");
const mongoose = require("mongoose");
const Action = require("../models/action");
const Project = require("../models/project");

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
    const data = await Action.findById(id).exec();
    return data;
  } catch (err) {
    console.log("Error: ", err);
  }
};

const create = async function (id, action) {
  if (id) {
    try {
      //If request sent with id, find and embed action into associated project
      let project = await Project.findOneAndUpdate(
        { _id: id },
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
      ).exec();
      return project;
    } catch (err) {
      console.log("Error: ", err);
    }
  }
  const created = await Action.create(action, function (err) {
    if (err) {
      console.log("Error: ", err);
    }
    return created;
  }).exec();
};

const updateParent = async (id, update) => {
  try {
    let parent = await Project.findOneAndUpdate(
      {},
      {
        $set: {
          "actions.$[i].type": update.type,
          "actions.$[i].description": update.description,
        },
      },
      {
        arrayFilters: [{ "i._id": mongoose.Types.ObjectId(id) }],
        new: true,
        useFindAndModify: false
      }
    ).exec();
    return parent.actions;
  } catch (err) {
    console.log("Error: ", err);
  }
};
const update = async (id, update) => {
  const filter = { _id: id };
  await updateParent(id, update);
  try {
    const updated = await Action.findOneAndUpdate(filter, update, {
      new: true,
    }).exec();
    return updated;
  } catch (err) {
    console.log("Error: ", err, stack);
  }
};

const destroy = async (id) => {
  const filter = { _id: id };
  try {
    const action = await Action.deleteOne(filter).exec();
    return action;
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
