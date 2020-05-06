import ReactDOM from 'react-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'


class ParentComponent extends React.Component {

    // state = {
    //     like: 0
    // }
    //Mount cycle: inital render phase
    constructor() {
        super();
        this.state = {
            like: 0
        }
        console.log('Parent Constructor is called');
    }
    //after dom is created under javascript
    componentDidMount() {
        console.log('Parent componentDidMount is called');
        //side effects
        document.title = 'Evergent-Home'
    }

    componentDidUpdate() {
        console.log('ParentComponent ComponentDidUpdate')
        //side effects
        document.title = 'Evergent-increment'


    }
    componentWillUnmount() {
        //resource clean up
        console.log('componentWillUnmount')
    }
    render() {
        console.log('Parent render is called')
        return <div>
            <h1>ParentComponent</h1>
            <button onClick={() => {
                let count = this.state.count + 1;
                this.setState({ count })
            }}>+</button>
            <ChildComponent  {...this.state} />
        </div>
    }

}

class ChildComponent extends React.Component {

    //Mount cycle: inital render phase
    constructor() {
        super();
        console.log('ChildComponent Constructor is called');
    }
    componentDidMount() {
        console.log('ChildComponent componentDidMount is called');
    }
    componentDidUpdate() {
        console.log('ChildComponent ComponentDidUpdate')
    }
    componentWillUnmount() {
        //resource clean up
        console.log('componentWillUnmount')
    }
    render() {
        console.log('ChildComponent render is called')
        return <div>
            <h1>ChildComponent</h1>
        </div>
    }

}


const Application = () => {
    return <div>
        <ParentComponent />
    </div>
}
ReactDOM.render(<Application />, document.getElementById('root'));