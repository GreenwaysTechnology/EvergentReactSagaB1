const TODOS = require('../mockdata/TODOS');

class TodoService {
    constructor() { }
    findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, TODOS);
        });
    }
    findById(id) {
        return new Promise((resolve, reject) => {
            const filteredTodo = TODOS.filter((todo, index) => {
                return todo.id === parseInt(id);
            })
            if (filteredTodo && filteredTodo.length > 0) {
                resolve(filteredTodo)
            } else {
                reject({ message: 'No todo' })
            }
        });
    }
}
module.exports = new TodoService();