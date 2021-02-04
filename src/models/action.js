const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActionSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    type: {
      type: String,
      enum: ["code", "call", "hangout", "reading", "delegate", "none"],
      default: "none",
    },
    queued: { type: Boolean, default: false },
    description: { type: String, default: "default description" },
    complete: { type: Boolean, default: false },
    waitingFor: [],
    setting: {
      type: String,
      enum: ["home", "driving", "walking", "computer", "none"],
      default: "none",
    },
    deadline: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Action", ActionSchema);
