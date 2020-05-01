//React : JSX Rules
import React from 'react';
import ReactDOM from 'react-dom';

const HeadingComponent = () =>
    <div>
        <h1>EverGent!</h1>
        <p>Welcomes you!</p>
    </div>


ReactDOM.render(<HeadingComponent />, document.getElementById('root'));