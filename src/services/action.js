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
  //Create the action
  const created = await Action.create([action], async function (err) {
    if (err) {
      console.log("Error: ", err);
    }
    //If id of parent and no error creating action, update parent Project
    if (id) {
      try {
        //Find and embed action into associated project
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
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  });
  return created;
};

const updateParent = async (id, update) => {
  let project = await Project.findOne(
    { "actions._id": mongoose.Types.ObjectId(id) },
    function (err, doc) {
      console.log(doc);
    }
  );
  try {
    let parent = await Project.findOneAndUpdate(
      { _id: project._id },
      {
        $set: {
          "actions.$[i].type": update.type,
          "actions.$[i].description": update.description,
        },
      },
      {
        arrayFilters: [{ "i._id": mongoose.Types.ObjectId(id) }],
        new: true,
        useFindAndModify: false,
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
    console.log("Error: ", err);
  }
};

const destroy = async (id) => {
  const action_id = mongoose.Types.ObjectId(id);
  const update = { $pull: { actions: { _id: action_id } } };
  var ObjectId = mongoose.Types.ObjectId;
  const filter = { _id: ObjectId(id) };

  Project.find({ "actions._id": action_id }, function (err, result) {
    if(err) return err
    Project.updateOne(
      { _id: ObjectId(result[0]._id) },
      { $pull: { actions: { _id: action_id } } }
    ).then((err, output) => console.log("output of db project op: ", output));
  });

  Action.deleteOne(filter, function (err, output) {
    if(err) return err
    console.log("output of action db op ", output);
  });
};

module.exports = {
  all: all,
  byId: byId,
  create: create,
  update: update,
  destroy: destroy,
};
