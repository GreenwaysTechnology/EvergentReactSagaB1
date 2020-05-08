import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

/**
 * 
 * The below is not scalable;
 * the window resize behaviour i want in other component as well then again i have 
 * write code inside : code duplication
 * as app dev, he requires many utilties like window resize...
 * 
 */

function CustomerComponent({ title }) {
    const [screen, setScreen] = useState(title)
    //declare variable to hold currnt window width
    const [width, setWidth] = useState(window.innerWidth);
    //feature using hooks

    //feature using hooks

    //set screen title 
    useEffect(() => {
        //side effects
        document.title = screen;
        //handler function
        const handlerResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handlerResize)

        //component will unmount
        return () => {
            window.removeEventListener('resize')
        }

    })
    return <div className="container">
        <h1>Customer Management App</h1>
        <h2>Current Screen Width : {width}</h2>
    </div>
}

const App = () => <CustomerComponent title="Customer Manager App" />

render(<App />, document.getElementById('root'));