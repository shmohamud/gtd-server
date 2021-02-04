const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema(
  {
    content: { type: String, default: "default review description" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", ReviewSchema);
