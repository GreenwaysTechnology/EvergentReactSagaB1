import React from 'react'
import { render } from 'react-dom';
import { BrowserRouter, Link, Route, Switch, useRouteMatch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'


//
const Guest = () => {
    return <h1>Guest</h1>
}
const Premium = () => {
    return <h1>Premium</h1>
}


//components to render
const Home = () => <h1>Home Page</h1>
const About = () => <h1>About Page</h1>
const Users = () => {

    //get Route Match Object
    let match = useRouteMatch()
    console.log(match);
    return <div>
        <h3>Users</h3>
        {/**Sub menu
         *  Url pattern
         * http://localhost:3000/users/guest
         * http://localhost:3000/users/premium
         * /users - parent menu
         * 
         * points:
         * 1.You need to access parent menu items
         *  we have special object RouteMatch.
         *  we can use useRouteMatch hook will help to the get object
         * 
         */}

        <ul>
            <li>
                <Link to={`${match.url}/guest`}>Guest User</Link>
            </li>
            <li>
                <Link to={`${match.url}/premium`}>Premium User</Link>
            </li>
        </ul>
        <hr />
        <Switch>
            <Route path={`${match.path}/guest`}>
                <Guest />
            </Route>
            <Route path={`${match.path}/premium`}>
                <Premium />
            </Route>

        </Switch>

    </div>

}



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