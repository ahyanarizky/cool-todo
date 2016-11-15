var express = require('express');
var router = express.Router();
const controller = require('../controller/todo.controller')

/* GET users listing. */
router.get('/todo', controller.getAllTodo)

router.post('/todo', controller.createTodo)

router.put('/todo/:id', controller.updateTodoContent)

router.put('/todo/status/:id', controller.setTodoStatus)

router.delete('/todo/:id', controller.deleteTodo)

module.exports = router;
