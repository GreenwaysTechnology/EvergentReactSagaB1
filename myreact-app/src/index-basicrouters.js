import React from 'react'
import { render } from 'react-dom';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'


//components to render
const Home = () => <h1>Home Page</h1>
const About = () => <h1>About Page</h1>
const Users = () => <h1>Users Page</h1>



const Application = () => {
    return <BrowserRouter>
        {/**Menu bar : master menu */}
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
                <hr />
            </nav>
            {/**Navigation rules */}

            {/**
             * A <Switch> looks through its children <Route>s and renders the
             * first one that matches the Current URL
             */}
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/users">
                    <Users />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>

        </div>

    </BrowserRouter>
}
render(<div className="container">
    <h1>Router Application</h1>
    <Application />
</div>, document.getElementById('root'));