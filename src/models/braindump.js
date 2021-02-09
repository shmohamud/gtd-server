const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BraindumpSchema = new Schema(
  {
    description: String,
    uid: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Braindump", BraindumpSchema);
