const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActionSchema = new Schema({
  _id: Schema.Types.ObjectId,
  type: { type: String, default: "none" },
  queued: { type: Boolean, default: false },
  description: { type: String, default: "default description" },
  complete: { type: Boolean, default: false },
  waitingFor: [],
  setting: { type: String, default: "default setting" },
});

module.exports = mongoose.model("Action", ActionSchema);