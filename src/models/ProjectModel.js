const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProjectSchema = new Schema({
    _id: Schema.Types.ObjectId,
    title: String,
    deadline: Date,
    description: String,
    actions: []
})

module.exports = mongoose.model("Project", ProjectSchema)