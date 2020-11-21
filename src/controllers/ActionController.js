require('../db')
const mongoose = require('mongoose')
const Action = require('../models/ActionModel')
const Project = require('../models/ProjectModel');
const ObjectId = mongoose.Types.ObjectId

const createAndEmbed = async function (projectId, action) {
  try {
    await Action.create(action, function (err) {
      if (err) {
        console.log("Error: ", err)
      }
    })
  }
  catch (err) {
    console.log("Error: ", err)
  }
  try {
    let project = await Project.findOneAndUpdate({ _id: projectId },
      {
        $push: {
          actions: {
            _id: action._id,
            type: action.type,
            completed: action.completed,
            description: action.description,
            setting: action.setting,
          }
        }
      },
      {
        new: true,
        useFindAndModify: false
      })
      console.log("Project Result: ", project)

  }
  catch (err) {
    console.log("Error: ", err)
  };

};

//dummy data
const action = new Action({ _id: ObjectId(), description: "Best action" })

//temp test
createAndEmbed(ObjectId("5fb8a0f80e2d2845022e4d33"), action)

module.exports = { createAndEmbed: createAndEmbed }