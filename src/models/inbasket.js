const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require('mongoose-type-url')

const InbasketSchema = new Schema(
  {
    description: String,
    urls:[mongoose.SchemaTypes.Url],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inbasket", InbasketSchema);
