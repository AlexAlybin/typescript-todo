const Todo = require("../models/todoModel");
const getTodos = async (req, res) => {
    try {
        const tasks = await Todo.find();
        res.send(tasks);
    } catch (error) {
        res.send(error);
    }
}

const addTodo = async (req, res) => {
    try {
        const task = await new Todo(req.body).save();
        res.send(task);
    } catch (error) {
        res.send(error);
    }
}

const updateTodo = async (req, res) => {
    try {
        const task = await Todo.findOneAndUpdate(
            {_id: req.params.id},
            {completed: req.body.completed}
        );
        res.send(task);
    } catch (error) {
        res.send(error);
    }
}

const deleteTodo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.send(true);
    } catch (error) {
        res.send(error);
    }
}

module.exports = {getTodos, addTodo, updateTodo, deleteTodo}