//Adding multiple state variables:
import React, { useState } from 'react';
import { render } from 'react-dom';

const Counter=(props) => {
    //we can use more useState hook api
    const [incrementValue, setincrementValue] = useState(props.incrementSeed);
    const [decrementValue, setdecrementValue] = useState(props.decrementSeed);
    return <div>
        <h1>Counter App</h1>
        <h2>Increment Value : {incrementValue}</h2>
        <h2>Decrement Value : {decrementValue}</h2>

        <button onClick={() => setincrementValue(prevState => {
            console.log(`Previouse State ${prevState}`)
            return prevState + 1
        })}>
            increment
          </button>
        <button onClick={() => setdecrementValue(decrementValue - 1)}>decrement</button>
    </div>
}


render(<Counter incrementSeed={50} decrementSeed={20} />, document.getElementById('root'));