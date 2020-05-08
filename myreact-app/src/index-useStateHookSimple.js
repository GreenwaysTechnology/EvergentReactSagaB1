//hooks
import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css'


//Before hooks :class components

/**
class CounterComponent extends React.Component {

    state = {
        counter: 0 // inital value
    };

    //Listener method
    onIncrement = () => {
        let counter = this.state.counter + 1;
        this.setState({ counter });
    }

    render() {
        console.log('render method is called', this.state.counter);
        return <div className="container">
            <h1>Counter Application</h1>
            <h3>Counter : {this.state.counter}</h3>
            <button className="btn btn-success" onClick={this.onIncrement}>+</button>
        </div>
    }
}
const Application = () => <CounterComponent />

ReactDOM.render(<Application />, document.getElementById('root'));
*/

//Hooks
// function CounterComponent(props) {
//     //hooks
//     const [counter, setCounter] = useState(10)
//     function onDecrement() {
//         setCounter(counter - 1)
//     }
//     return <div className="container">
//         <h1>Counter Application</h1>
//         <h2>Counter : {counter}</h2>
//         {/* <button onClick={() => setCounter(prevState => {
//             console.log(`Previouse State ${prevState}`)
//             return prevState + 1
//         })}> +</button> */}
//         <button onClick={() => setCounter(counter + 1)}>+</button>
//         <button onClick={onDecrement}>-</button>

//     </div>
// }

const CounterComponent = (props) => {
    //hooks
    const { seedValue } = props;
    const [counter, setCounter] = useState(seedValue)

    const onDecrement = () => {
        setCounter(counter - 1)
    }
    return <div className="container">
        <h1>Counter Application</h1>
        <h2>Counter : {counter}</h2>
        {/* <button onClick={() => setCounter(prevState => {
            console.log(`Previouse State ${prevState}`)
            return prevState + 1
        })}> +</button> */}
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={onDecrement}>-</button>

    </div>
}

CounterComponent.defaultProps = {
    seedValue: 2
}

const Application = () => <>
    <CounterComponent seedValue={10} />
    <hr></hr>
    <CounterComponent />

</>

ReactDOM.render(<Application />, document.getElementById('root'));