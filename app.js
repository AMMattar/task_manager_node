const express = require('express');
const app = express()
const tasks = require('./routes/index')

app.use(express.json())
const port = 3000;


app.get('/hello', (req, res) => {
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)

app.listen(port, console.log(`server is listening on port ${port}...`))

