'use strict'

const Todo = require('../models/todo.model');

module.exports = {
    getAllTodo: function(req, res, next) {
        Todo.find({}, function(err, data) {
            if (err) {
                console.log(err);
                res.json({ message: `Error : ${err}` })
            } else {
                res.json(data)
            }
        })
    },
    getOneTodo: function(req, res, next) {
        Todo.find({
            todo_id: req.params.id
        }, function(err, data) {
            if (err) {
                console.log(err);
                res.json({ message: `Error : ${err}` })
            } else {
                res.json(data)
            }
        })
    },
    createTodo: function(req, res, next) {
        Todo.create({
            todo: req.body.todo
        }, function(err, data) {
            if (err) {
                console.log(err);
                res.json({ message: `Error : ${err}` })
            } else {
                res.json(data)
            }
        })
    },
    updateTodoContent: function(req, res, next) {
        Todo.findOneAndUpdate({
            todo_id: req.params.id
        }, {
            todo: req.body.todo
        }, { new: true }, function(err, data) {
            if (err) {
                console.log(err);
                res.json({ message: `Error : ${err}` })
            } else {
                res.json(data)
            }
        })
    },
    setTodoStatus: function(req, res, next) {
        Todo.findOneAndUpdate({
            todo_id: req.params.id
        }, {
            status: req.body.status
        }, { new: true }, function(err, data) {
            if (err) {
                console.log(err);
                res.json({ message: `Error : ${err}` })
            } else {
                res.json(data)
            }
        })
    },
    deleteTodo: function(req, res, next) {
        Todo.remove({
            todo_id: req.params.id
        }, function(err, data) {
            if (err) {
                console.log(err);
                res.json({ message: `Error : ${err}` })
            } else {
                res.json(data)
            }
        })
    }
}
