import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'



//Parent Component

class App extends Component {
    //common theme
    theme = {
        "backgroundColor": "red",
        "color": "white"
    }

    render() {
        return <>
            <h1>Parent Component</h1>
            <ToolBar theme={this.theme} />
        </>
    }
}
//child component 1
function ToolBar(props) {

    return <>
        <ThemedButton theme={props.theme} />
    </>
}
//child component 2

function ThemedButton(props) {
    return <>
        <Button theme={props.theme} />
    </>
}
//child component 3

function Button(props) {
    return <button style={props.theme}>Theme</button>
}

render(<App />, document.getElementById('root'))