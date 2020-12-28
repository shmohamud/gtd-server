const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActionSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    type: {
      type: String,
      enum: ["code", "call", "hangout", "reading", "none"],
      default: "none",
    },
    queued: { type: Boolean, default: false },
    description: { type: String, default: "default description" },
    complete: { type: Boolean, default: false },
    waitingFor: [],
    setting: {
      type: String,
      enum: ["home", "driving", "walking", "none"],
      default: "none",
    },
    deadline: { type: Date, default: "2099-01-01T10:30" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Action", ActionSchema);
