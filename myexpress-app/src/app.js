//express application
const express = require('express') // returns a function, used to create application object

const TodoController = require('./controllers/todocontroller');
const UserController = require('./controllers/userscontroller')
const BooksController = require('./controllers/bookscontroller');

const bodyParser = require('body-parser')


//create application object
const app = express();

//body parser middleware
app.use(bodyParser.json())


//custom middleware
//i want to show url an method and date of request every time when user requests

app.use(function (req, res, next) {
    console.log(`URL ${req.path} Method ${req.method} ${new Date()}`)
    //call next 
    next();
});



// /api/todos/list : redirect to the TODOS Controller.
app.use('/api/todos', TodoController)
// /api/users/list : redirect to the USERS Controller
app.use('/api/users', UserController)
app.use('/api/books', BooksController)




//rest end points
//home page
app.get('/', (req, res) => {
    res.send('<h1>Evergent REST API Server</h1>')
});


//to start and listen server
app.listen(3000, function () {
    console.log('Express server is ready!!!');
});