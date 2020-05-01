//React : dom element creation : Object creation: Component creation
import React from 'react';
import ReactDOM from 'react-dom';

//component creational patterns

//1.function : es 5 , es 6 arrow

// function HeadingComponent() {
//     //returns ReactElement:Object:Comonent
//     //ReactElement is type of any Component in react
//     return <h1>
//         HelloReact!
//     </h1>;
// }
//arrow :
const HeadingComponent = () => <h1>
    HelloReact!
</h1>;


//flush the object /object tree/component/component tree into target: browser
//imperative function call : not recommended HeadingComponent()
//ReactDOM.render(HeadingComponent(), document.getElementById('root'));

//declarative function call with help of mark up
//ReactDOM.render(<HeadingComponent></HeadingComponent>, document.getElementById('root'));
ReactDOM.render(<HeadingComponent />, document.getElementById('root'));