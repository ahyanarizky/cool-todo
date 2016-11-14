var express = require('express');
var router = express.Router();
const Todo = require('../models/todo.model');

/* GET users listing. */
router.get('/todo', function(req, res, next) {
    Todo.find({}, function(err, data) {
        if (err) {
            console.log(err);
            res.json({ message: `Error : ${err}` })
        } else {
            res.json(data)
        }
    })
});

router.post('/todo', function(req, res, next) {
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
})

router.put('/todo/:id', function(req, res, next) {
    Todo.findOneAndUpdate({
        todo_id: req.params.id
    }, req.body, { new: true }, function(err, data) {
        if (err) {
            console.log(err);
            res.json({ message: `Error : ${err}` })
        } else {
            res.json(data)
        }
    })
})

router.put('/todo/status/:id', function(req, res, next) {
    Todo.findOneAndUpdate({
        todo_id: req.params.id
    }, req.body, { new: true }, function(err, data) {
        if (err) {
            console.log(err);
            res.json({ message: `Error : ${err}` })
        } else {
            res.json(data)
        }
    })
})


router.delete('/todo/:id', function(req, res, next) {
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
})

module.exports = router;
