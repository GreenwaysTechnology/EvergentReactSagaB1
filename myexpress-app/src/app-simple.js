//express application
const express = require('express') // returns a function, used to create application object

//create application object
const app = express();


//rest end points
//home page
app.get('/', (req, res) => {
    res.send('<h1>Evergent REST API Server</h1>')
});

//todos
app.get('/api/todos/list', (req, res) => {
    res.send('todos-list api server')
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