import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';


const GreetingComponent = () => {

    // return <React.Fragment>
    //     <h1>Welcome</h1>
    //     <h1>How are You</h1>
    // </React.Fragment>
    // return <Fragment>
    //     <h1>Welcome</h1>
    //     <h1>How are You</h1>
    // </Fragment>
    return <>
        <h1>Welcome</h1>
        <h1>How are You</h1>
        <Table />
    </>
}


class Table extends Component {
    render() {
        return (
            <table>
                <tr>
                    <Columns />
                </tr>
            </table>
        );
    }
}
class Columns extends Component {
    render() {
        return (
            <>
                <td>Hello</td>
                <td>World</td>
            </>
        );
    }
}

class WelcomeComponent extends Component {
    render() {
        return <div>
            <GreetingComponent />
        </div>
    }
}

const App = () => <WelcomeComponent />;

render(<App />, document.getElementById('root'));