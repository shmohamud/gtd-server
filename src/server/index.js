const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const projects = require('../routes/project')
const actions = require('../routes/action');
const braindumps = require('../routes/braindump');

const app = new express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/projects', projects)
app.use('/actions', actions)
app.use('/braindumps', braindumps)


const port = process.env.port || 4000

app.listen(port, function(){
    console.log(`Server is up on port ${port}`)
})