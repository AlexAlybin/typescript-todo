const mongoose = require("mongoose")

const TodoSchema = mongoose.Schema

const Todo = new TodoSchema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("todo", Todo)