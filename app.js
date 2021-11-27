const connectDB = require('./db/connection')
const express = require('express');
const app = express()
const tasks = require('./routes/index')
require('dotenv').config()
const notFound = require("./middleware/not-found")
const errorHandle = require("./middleware/error-handler")

app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(errorHandle)

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}...`))
    } catch (err) {
        console.log(err)
    }
}

start()

