//Arrays
import ReactDOM from 'react-dom';
import React from 'react';
import TODOS from './mock-data/todos-mock';
// import './index.css'
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

//style object :javascript style object pattern
const todoStyle = {
    fontStyle: 'italic',
    color: 'blue'
}

const ToDoListComponent = props => {
    const { todos } = props;
    return <div className="container">
        <div>
            <h1>Todo Application</h1>
            {
                todos.map((todo, index) => <div key={index}>
                    <h3 style={todoStyle}>{todo.title} : {todo.completed ? 'Completed' : 'Not Completed'} </h3>
                </div>)
            }
        </div>
    </div>
}
ReactDOM.render(<ToDoListComponent todos={TODOS} />, document.getElementById('root'));