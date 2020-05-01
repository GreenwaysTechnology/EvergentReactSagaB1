//React : dom element creation : Object creation: Component creation
import React from 'react';
import ReactDOM from 'react-dom';

//component creational patterns
//es 6 class

class HeadingComponent extends React.Component {
    render() {
        return <h1>Hello React!</h1>
    }
}


ReactDOM.render(<HeadingComponent />, document.getElementById('root'));