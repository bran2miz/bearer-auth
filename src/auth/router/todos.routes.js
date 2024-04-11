//need express router
const express = require('express');

const { todoCollection } = require('../models/index.js');

const router = express.Router();

// RESTful route declarations
router.get('/todo', getTodos);
router.get('/todo/:id', getOneTodo);
router.post('/todo', createTodo);
router.put('/todo/:id', updateTodo);
router.delete('/todo/:id', deleteTodo);

//route handlers
async function getTodos(req,res) {
    // accessing collection functions when you createa new collection in index 
    let allTodos = await todoCollection.read();
    res.status(200).json(allTodos);
};

async function getOneTodo(req,res) {
    let id = req.params.id;
    let theTodo = await todoCollection.read(id);
    res.status(200).json(theTodo);
};

async function createTodo(req,res) {
    let bodyObj = req.body;
    let newTodo = await todoCollection.create(bodyObj);
    res.status(200).json(newTodo);
}

async function updateTodo(req,res) {
    let id = req.params.id;
    let bodyObj = req.body;
    let updatedTodo = await todoCollection.update(id, bodyObj)
    res.status(200).json(updatedTodo)
}

async function deleteTodo(req, res) {
    let id = req.params.id;
    let deletedTodo = await todoCollection.delete(id);
    res.status(204).send(deletedTodo)
}


module.exports = router;