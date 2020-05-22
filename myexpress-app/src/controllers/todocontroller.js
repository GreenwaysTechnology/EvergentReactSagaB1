const express = require('express');
const { findAll, findById } = require('../services/TODOService');


//create router object
const todocontroller = express.Router();

//middleware only for todos
todocontroller.use(function (req, res, next) {
    console.log('Welcome to todo Module');
    next();
})


//todos : controller
todocontroller.get('/list', async (req, res) => {

    try {
        const todos = await findAll();
        res.json(todos);
    }
    catch (err) {
        res.json(err);
    }

})

// /api/todos/1
todocontroller.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const todos = await findById(id);
        res.json(todos);
    }
    catch (err) {
        res.json(err);
    }

})
/** 
todocontroller.post('/', async (req, res) => {

    try {
        const todos = await findAll();

        //how to read read.
        //attach data event to read data
        let data = '';
        req.on('data', (chunk) => {
            //read request pay load
            //console.log(chunk.length)
            data += chunk;
        });
        //attach end event to ensure , data read operation is completed and then send response
        req.on('end', () => {
            console.log(data);
            res.json(todos.concat(JSON.parse(data)));
        });


    }
    catch (err) {
        res.json(err);
    }


})
*/

todocontroller.post('/', async (req, res) => {

    try {
        const todos = await findAll();
        const body = req.body;
        console.log(body);
        res.json(todos.concat(body));

        res.send('todopost')

    }
    catch (err) {
        res.json(err);
    }


})
todocontroller.put('/:id', (req, res) => {
    res.send('todos -put')
})

todocontroller.delete('/:id', (req, res) => {
    res.send('todos -delete')
})

//exports controller
module.exports = todocontroller;