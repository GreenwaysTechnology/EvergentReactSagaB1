//React : Component composition

import React from 'react';
import ReactDOM from 'react-dom';


//header component
const HeaderComponent = () => <div>
    <h1>Site Header</h1>
</div>

const BodyComponent = () => <div>
    <p>We recommend using JSX to describe what your UI should look like.
    Each JSX element is just syntactic sugar for calling React.createElement(). You will not typically
    invoke the following methods directly if you are using JSX.
    </p>
</div>

const FooterComponent = () => <div>
    <h1>Site Footer</h1>
</div>

const Application = () => <div>
    <HeaderComponent />
    <BodyComponent />
    <FooterComponent />
</div>

ReactDOM.render(<Application />, document.getElementById('root'));