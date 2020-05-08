
import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'


//create Context Object
const { Provider, Consumer } = React.createContext('dark')

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
            <Provider value={this.theme}>
                <ToolBar />
            </Provider>
        </>
    }
}
//child component 1
function ToolBar(props) {

    return <>
        <ThemedButton />
    </>
}
//child component 2

function ThemedButton(props) {
    return <>
        <Button />    </>
}
//child component 3

function Button(props) {

    return <Consumer>
        {theme => <button style={theme}>Theme</button>}
    </Consumer>
}

render(<App />, document.getElementById('root'))