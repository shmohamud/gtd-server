const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    title: { type: String, default: "default project title" },
    deadline: { type: Date, default: "2099-01-01T10:30" },
    description: { type: String, default: "default project description" },
    actions: [],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
