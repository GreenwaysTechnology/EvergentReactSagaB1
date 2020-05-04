
import ReactDOM from 'react-dom';
import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css'


class CounterComponent extends React.Component {

    state = {
        counter: 0 // inital value
    };

    //Listener method
    onIncrement = () => {
        // alert('increment is called')
        //biz logic: increment counter
        // this.state.counter = this.state.counter + 1;
        //console.log(this.state.counter)
        //call render in each button click
        // this.render(); : dont call render manually
        //call setState method
        // this.setState(function (oldstate) {
        //     console.log(oldstate);
        //     //return new object :state object
        //     return {
        //         counter: oldstate.counter + 1
        //     }
        // });
        // this.setState(oldstate => {
        //     return {
        //         counter: oldstate.counter + 1
        //     }
        // });
        // this.setState(oldstate => {
        //     let counter = oldstate.counter + 1;
        //     return {
        //         counter: counter
        //     }
        // }); 
        // this.setState(oldstate => {
        //     let counter = oldstate.counter + 1;
        //     return {
        //         counter
        //     }
        // });

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
