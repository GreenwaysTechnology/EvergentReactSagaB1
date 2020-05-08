
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';


function Customer(props) {

    const [screen, setScreen] = useState('Customer Manager App');
    //Performing side effects
    useEffect(function () {
        //side effects
        document.title = screen;

        //componentwillUnMount
        return function () {

        }
    });
    function changeTitle() {
        setScreen('Customer Manager App -Add');
    }
    return <div>
        <h1>Customer Manager App: Function using Side effects</h1>
        <button onClick={changeTitle} >Add</button>

    </div>
}

render(<Customer />, document.getElementById('root'));