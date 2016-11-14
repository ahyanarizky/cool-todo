'use strict'

const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence');
let connection = mongoose.createConnection(process.env.DATABASE);
let todoSchema = new mongoose.Schema({
    todoId: {
        type: Number
    },
    todo: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    }
});


todoSchema.plugin(AutoIncrement, { inc_field: 'todo_id' });
let Todo = connection.model('Todo', todoSchema);
module.exports = Todo
