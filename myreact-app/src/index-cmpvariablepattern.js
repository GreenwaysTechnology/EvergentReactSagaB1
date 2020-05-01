//React : dom element creation : Object creation: Component creation
import React from 'react';
import ReactDOM from 'react-dom';

//component creational patterns

//create element/object/component : jsx language.
//1.variable pattern
const Heading = <h1>Hello React!</h1>;

//flush the object /object tree/component/component tree into target: browser

ReactDOM.render(Heading, document.getElementById('root'));