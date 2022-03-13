const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema(
  {
    title: { type: String, default: "default project title" },
    description: { type: String, default: "default project description" },
    deadline: { type: Date },
    uid: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
