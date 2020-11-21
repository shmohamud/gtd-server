require('../db')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
const Project = require('../models/ProjectModel')
const { addMonths } = require('../helpers')

const createProject = async function(project){
    await Project.create(project, function(err){
        if(err){
            console.log("Error: ", err)
        }
        console.log("Successfully created")
    })
}

//dummy data
const date = new Date
const test = {_id: ObjectId(), title: 'Test Project', deadline: addMonths(date, 1)}

//temp test
createProject(test)

module.exports = {createProject:createProject}


