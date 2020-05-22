const express = require('express');
const { findAll, findById } = require('../services/UserService');


//create router object
const usercontroller = express.Router();


//todos : controller
usercontroller.get('/list', async (req, res) => {

    try {
        const users = await findAll();
        res.json(users);
    }
    catch (err) {
        res.json(err);
    }

})

// /api/todos/1
usercontroller.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const todos = await findById(id);
        res.json(users);
    }
    catch (err) {
        res.json(err);
    }

})

usercontroller.post('/', (req, res) => {
    res.send('users -post')
})

usercontroller.put('/:id', (req, res) => {
    res.send('users -put')
})

usercontroller.delete('/:id', (req, res) => {
    res.send('users -delete')
})

//exports controller
module.exports = usercontroller;