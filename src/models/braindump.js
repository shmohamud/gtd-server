const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BraindumpSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    dump: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Braindump", BraindumpSchema);
