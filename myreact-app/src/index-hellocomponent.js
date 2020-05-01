//React : dom element creation : Object creation: Component creation
import React from 'react';
import ReactDOM from 'react-dom';

//create element/object/component : jsx language.

const Heading = <h1>Hello React!</h1>;

//flush the object /object tree/component/component tree into target: browser

ReactDOM.render(Heading, document.getElementById('root'));