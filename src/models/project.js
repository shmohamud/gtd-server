const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActionSchema = new Schema({
  description: { type: String, default: "default description" },
  type: {
    type: String,
    enum: ["code", "call", "hangout", "reading", "delegate", "none"],
    default: "none",
  },
  complete: { type: Boolean, default: false },
  queued: { type: Boolean, default: false },
  waitingFor: [],
  setting: {
    type: String,
    enum: ["home", "driving", "walking", "computer", "none"],
    default: "none",
  },
  deadline: { type: Date },
  uid: String,
},
{ timestamps: true })

const ProjectSchema = new Schema(
  {
    title: { type: String, default: "default project title" },
    description: { type: String, default: "default project description" },
    deadline: { type: Date },
    actions:[ActionSchema],
    uid: String,
  },
  { timestamps: true }
);

//Quick test
//TODO: Update the create service & controller for actions to ensure they're pushed and saved to a project on CREATION
const aProjectModel = mongoose.model("Project", ProjectSchema)

const aProject = new aProjectModel({title: "test", description:"test des", deadline: Date()})
aProject.actions.push({description:"test desc", complete:false, deadline:Date()})
console.log("A PROJECT: ", aProject)

aProject.save((err, data)=>{})

module.exports = mongoose.model("Project", ProjectSchema);

