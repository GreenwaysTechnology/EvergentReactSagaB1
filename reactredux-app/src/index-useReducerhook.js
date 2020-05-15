//userReducer Hook, eleminates lot of boliler plate code in redux.

import React, { useReducer } from 'react';
import { render } from 'react-dom';
import { INCREMENT, DECREMENT } from './actionconstants';



//container component
//reducer
function CounterReducer(state, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }

}

const initalState = 10;
function CounterContainer() {
    //reducer
    const [counter, dispatch] = useReducer(CounterReducer, initalState)

    function onIncrement() {
        dispatch({ type: INCREMENT })
    }
    return <div>
        <h1>Counter App: Redux Style of React</h1>
        <h1>Counter {counter}</h1>
        <button onClick={onIncrement}>INCREMENT</button>
        <button onClick={() => {
            dispatch({ type: DECREMENT })
        }}>DECREMENT</button>

    </div>
}


const App = () => {
    return <CounterContainer />
}
render(<App />, document.getElementById('root'));