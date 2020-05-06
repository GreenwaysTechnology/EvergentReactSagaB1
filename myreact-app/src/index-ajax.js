import React, { Component } from 'react';
import { render } from 'react-dom';
import classNames from 'classnames'
import 'bootstrap/dist/css/bootstrap.css'

class Todo extends Component {

    state = {
        error: null,
        isLoaded: false,
        todos: []
    }
    componentDidMount() {
        const todourl = 'https://jsonplaceholder.typicode.com/todos';
        fetch(todourl).then(response => response.json()).then(todos => {
            this.setState(previousState => {
                return { ...previousState, todos, isLoaded: true };
            });

        },            error => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        );
    }
    showCompletedTodos = () => {
        this.setState(pstate => {
            let completed = pstate.todos.filter(todo => todo.completed);
            return {
                ...pstate,
                todos: completed
            }
        });
    }
    render() {

        const { error, isLoaded, todos } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <h1>Loading...</h1>;
        } else {
            return (
                <div>
                    <h1>TODO App</h1>
                    <button onClick={this.showCompletedTodos} className="btn btn-success">
                        Show Completed Todos
                              </button>
                    <button className="btn btn-primary">
                        Show All dos
                              </button>

                    <hr />
                    <h3>Total todos {this.state.todos.length}</h3>
                    <ul className="list-group">
                        {todos.map((todo, index) => (
                            <li className={`list-group-item ${classNames({ 'active': todo.completed })}`} key={index}>
                                <span className="badge badge-pill badge-primary">
                                    {todo.id}
                                </span>
                                <span>
                                    {todo.title}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }

    }
}

const App = () => {
    return <div className="container">
        <Todo />
    </div>
}

render(<App />, document.getElementById('root'));