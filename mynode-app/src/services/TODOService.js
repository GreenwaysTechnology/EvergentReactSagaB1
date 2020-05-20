const TODOS = require('../mockdata/TODOS');

class TodoService {
    constructor() {

    }
    //sync api
    findAllTodos() {
        return TODOS;
    }
    //async code :callback
    findAllTodosUsingCB(resolve, reject) {
        //timer
        setTimeout(resolve, 1000, TODOS);
    }
    //async code : promise
    findAllTodosUsingPromise() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, TODOS);
        });
    }
}
module.exports = TodoService;