const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActionSchema = new Schema(
  {
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
      enum: ["home", "commuting", "club", "driving", "walking", "computer", "none"],
      default: "none",
    },
    deadline: { type: Date },
    uid: String,
    priority: {enum: ["low", "medium", "high"]}

  
  },
  { timestamps: true }
);

module.exports = mongoose.model("Action", ActionSchema);
