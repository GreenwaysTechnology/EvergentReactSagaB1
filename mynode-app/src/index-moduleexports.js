//import mylib
const { name, city, state, isValid, ranking, sayGreet, skills } = require('./mylib');
const TodoService = require('./services/TODOService');

console.log(name, city, state)

// const todoService = new TodoService();
// console.log(todoService.findAllTodos());

const { findAllTodos, findAllTodosUsingCB, findAllTodosUsingPromise } = new TodoService();
//sync api calls
//console.log(findAllTodos());

//make async calls : using callbacks
//findAllTodosUsingCB(todos => console.log(todos));
async function fetchTodos() {
    // findAllTodosUsingPromise()
    //     .then(todos => console.log(todos))
    //     .catch(err => console.log)
    try {

        const todos = await findAllTodosUsingPromise();
        console.log(todos);
    } catch (err) {

    }
    finally {
        console.log('done!!')
    }
}
fetchTodos();
