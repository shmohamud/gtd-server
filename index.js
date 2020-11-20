const express = require('express')

const app = new express()
const port = process.env.port || 3000
app.post('/projects', (req,res)=> {
    res.send('Test')
})
app.listen(port, ()=> {
    console.log(`Server is up on port ${port}`)
})