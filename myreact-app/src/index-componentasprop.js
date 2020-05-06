//state as prop

import ReactDOM from 'react-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import logo from './logo.svg';


//component as prop
class Panel extends React.Component {
    render() {
        return <div className="container">
            {
                this.props.children
            }
        </div>
    }
}

const ImageComponent = () => <img src={logo} />

const Application = () => {
    return <Panel>
        <h1>Panel</h1>
        <ImageComponent />
    </Panel>
}

ReactDOM.render(<Application />, document.getElementById('root'));