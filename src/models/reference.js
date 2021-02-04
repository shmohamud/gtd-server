const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require('mongoose-type-url')
const ReferenceSchema = new Schema(
  {
    urls:[mongoose.SchemaTypes.Url],
    note: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reference", ReferenceSchema);
