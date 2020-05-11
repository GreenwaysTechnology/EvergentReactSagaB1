import React, { Component, useRef, useState, useEffect } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'


//useRef hooks
const TextInputWithFocusButton = () => {
    const inputEl = useRef(null);
    useEffect(() => {
        console.log(inputEl.current.value)       
    })
    const onButtonClick = () => {
        // `current` points to the mounted text input element
        inputEl.current.focus();

    };
    return <div>
        <input ref={inputEl} type="text"   value="Some" />
        <button onClick={onButtonClick}>Focus the input</button>
    </div>

}





const App = () => {
    return <div className="container">
        <TextInputWithFocusButton />
    </div>
}

render(<App />, document.getElementById('root'));
