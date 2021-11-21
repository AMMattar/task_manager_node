const getAllTasks = (req, res) => {
    res.send('get all task')
}

const createTasks = (req, res) => {
    res.send('create task')
}

const getTasks = (req, res) => {
    res.send('get single task')
}

const updateTasks = (req, res) => {
    res.send('update task')
}

const deleteTasks = (req, res) => {
    res.send('delete task')
}

module.exports = {
    getAllTasks, createTasks, getTasks, updateTasks, deleteTasks
}