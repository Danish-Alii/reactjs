// imports
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const publicRoutes = require('./Routes/publicRoutes')
const mongoose = require('mongoose')
const shared = require('./Shared/shared')

//middlewares
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(publicRoutes)

//database connection
mongoose.connect(shared.dbPath, { useNewUrlParser: true }, err => {
    if (err) throw new Error(err)

    console.log("database connected")
})

//server connection
app.listen(shared.port, err => {
    if (err) throw new Error(err)

    console.log("server is connected to http://localhost:" + shared.port)
})