const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ActionSchema = new Schema({
    _id: Schema.Types.ObjectId,
    type: { type: String, default: 'none' },
    description: String,
    complete: { type: Boolean, default: false },
    waitingFor: [],
    setting: { type: String, default: 'anywhere' },
})

module.exports = mongoose.model("Action", ActionSchema)