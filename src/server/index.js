const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const projectsRouter = require('../routes/project')
const actionsRouter = require('../routes/action');
const braindumpsRouter = require('../routes/braindump');

const app = new express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/projects', projectsRouter)
app.use('/actions', actionsRouter)
app.use('/braindumps', braindumpsRouter)


const port = process.env.port || 4000

app.listen(port, function(){
    console.log(`Server is up on port ${port}`)
})