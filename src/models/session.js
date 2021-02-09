const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SessionSchema = new Schema(
  {
        token: String,
        firstname:String,
        lastname:String,
        uid: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Session", SessionSchema);
