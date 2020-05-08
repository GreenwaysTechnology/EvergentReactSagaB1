import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

//react return values

const Welcome = () => {
    //return <h1>JSX</h1>
    //return null;
    //return "Hello"
    //return true;
    //return 100
    //return [1, 2, 3, 45, 67]
    return React.createElement('h1',null,'Hello')
}

render(<Welcome />, document.getElementById('root'))