require("../db");
const mongoose = require("mongoose");
const Action = require("../models/action");
const Project = require("../models/project");
const ObjectId = mongoose.Types.ObjectId;

const createAndEmbed = async function (projectId, action) {
  try {
    action._id = new ObjectId();
    await Action.create(action, function (err) {
      if (err) {
        console.log("Error: ", err);
      }
    });
  } catch (err) {
    console.log("Error: ", err);
  }
  try {
    let project = await Project.findOneAndUpdate(
      { _id: projectId },
      {
        $push: {
          actions: {
            _id: action._id,
            type: action.type,
            completed: action.completed,
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
};

const getActions = async () => {
  try {
    const actions = await Action.find({});
    return actions;
  } catch (err) {
    console.log("Error: ", err);
  }
};

module.exports = { createAndEmbed: createAndEmbed, getActions: getActions };
