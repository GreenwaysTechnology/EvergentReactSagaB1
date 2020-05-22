//express application
const express = require('express') // returns a function, used to create application object
const { findAll, findById } = require('./services');

//create application object
const app = express();


//rest end points
//home page
app.get('/', (req, res) => {
    res.send('<h1>Evergent REST API Server</h1>')
});

//todos : controller
app.get('/api/todos/list', async (req, res) => {

    try {
        const todos = await findAll();
        res.json(todos);
    }
    catch (err) {
        res.json(err);
    }

})

// /api/todos/1
app.get('/api/todos/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const todos = await findById(id);
        res.json(todos);
    }
    catch (err) {
        res.json(err);
    }

})

app.post('/api/todos', (req, res) => {
    res.send('todos -post')
})

app.put('/api/todos', (req, res) => {
    res.send('todos -put')
})

app.delete('/api/todos', (req, res) => {
    res.send('todos -delete')
})
//to start and listen server

app.listen(3000, function () {
    console.log('Express server is ready!!!');
});