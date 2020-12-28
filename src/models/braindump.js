const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BraindumpSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    item: Schema.Types.String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Braindump", BraindumpSchema);
