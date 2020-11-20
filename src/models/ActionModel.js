const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ActionSchema = new Schema({
    _id: Schema.Types.ObjectId,
    type: { type: String, default: 'none' },
    description: String,
    complete: { type: Boolean, default: false },
    waitingFor: [ActionSchema],
    setting: { type: String, default: 'anywhere' },
    project: { type: Schema.Types.ObjectId, ref: "Project" }
})

module.exports = mongoose.model("Action", ActionSchema)