import React, { useState, useEffect, useContext } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import { useWindowWidth, useWindowSetTitle } from './hooks';

const theme = {
    "backgroundColor": "red",
    "color": "white"
}
export const ThemeContext = React.createContext(theme)


function CustomerComponent({ title }) {
    const [screen, setScreen] = useState(title)
    const theme = useContext(ThemeContext);
    useWindowSetTitle(screen)
    return <div className="container">
        <h1 style={theme}>Customer Management App</h1>
        <h2>Current Screen Width : {useWindowWidth()}</h2>
    </div>
}

const App = () => <CustomerComponent title="CMS - Evergent" />

render(<App />, document.getElementById('root'));