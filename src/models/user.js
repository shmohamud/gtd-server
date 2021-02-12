const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    firstname: {type: String, trim: true, minLength:1, maxLength:30, require:true},
    lastname: {type: String, trim:true, minLength:1, maxLength:30, require: true},
    username: {type: String, index: { unique:true, dropDups:true }, trim: true, require:true, lowercase:true },
    email: {type: String, trim:true, minLength: 5, minLength:1, maxLength:30,require:true, lowercase:true, unique:true},
    password: {type: String, trim:true, minLength:7, maxLength:30, require:true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
