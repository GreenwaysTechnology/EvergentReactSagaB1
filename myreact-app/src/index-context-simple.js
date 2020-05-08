import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'


//create Context Object
const ThemeContext = React.createContext('dark')

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
            <ThemeContext.Provider value={this.theme}>
                <ToolBar />
            </ThemeContext.Provider>
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

    return <ThemeContext.Consumer>
        {theme => <button style={theme}>Theme</button>}
    </ThemeContext.Consumer>
}

render(<App />, document.getElementById('root'))