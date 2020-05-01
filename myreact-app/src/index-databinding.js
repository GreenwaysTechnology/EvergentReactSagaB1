//Component : data binding
import ReactDOM from 'react-dom';
import React from 'react';



function getValue() {
    return 100;
}


//Data binding
//data:primitive(string,number,boolean)
//data : object,array
const DisplayBoardComponent = () => {
    //variables
    let message = "Hai";
    let magicNo = 9000;
    let isEnabled = true;
    //object binding
    let product = {
        id: 1,
        name: 'Phone'
    }
    return <div>
        <h1>Data Binding</h1>
        <h2>String {"Hello"} {message}</h2>
        <h2>Number {10} {magicNo}</h2>
        <h2>Boolean {true ? "Enabled" : "Disabled"} {isEnabled ? "Enabled" : "Disabled"}</h2>
        <h2>Object {product.id} {product.name}</h2>
        <h2>Function {getValue()}</h2>

    </div>
};

ReactDOM.render(<DisplayBoardComponent />, document.getElementById('root'));