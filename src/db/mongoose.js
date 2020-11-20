const mongoose = require('mongoose')
const Project = require('../models/ProjectModel')
const chalk = require('chalk')
const { addMonths } = require('../helpers')
const { ObjectId } = require('mongodb')

const connected = chalk.bold.greenBright
const error = chalk.bold.yellowBright
const disconnected = chalk.bold.red

const dbURL = 'mongodb://127.0.0.1:27017/gtd-api'

mongoose.connect(dbURL, {
    useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true
})

mongoose.connection.on('connected', function () {
    console.log(connected('Mongoose connection is open to ', dbURL))
})

mongoose.connection.on('disconnected', function(){
    console.log(disconnected('Mongoose connection is disconnected'))
})

mongoose.connection.on('error', function(err){
    console.log(error('Mongoose connection error', err))
})

const date = new Date
const inOneMonth = addMonths(date, 1)

//quick project document creation & save test

const finishGTDBackend = new Project({
    _id: new ObjectId(),
    title: 'This is a Test Title Finish Backend',
    description: 'Set up DB and models required for full CRUD of Projects, Actions',
    deadline: inOneMonth
})
console.log(finishGTDBackend)
finishBackend.save()