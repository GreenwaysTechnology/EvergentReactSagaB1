import React, { useState, useEffect } from 'react'
import { render } from 'react-dom';
import { BrowserRouter, Link, Route, Switch, useRouteMatch, useParams, useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'


//SubMenu
const Guest = () => {
    return <h1>Guest</h1>
}
const Premium = () => {
    return <h1>Premium</h1>
}

//Dynamic menu Component
const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(function () {
        fetchComments()
    });
    async function fetchComments() {
        const url = 'https://jsonplaceholder.typicode.com/comments'
        const response = await fetch(url);
        const data = await response.json();
        setComments([...data])

    }

    return <div>
        <h1>Comments Application</h1>
        <ul>
            {
                // /detail/1 2
                comments.map((comment, index) => {
                    return <li key={index}>
                        <Link to={`/detail/${comment.id}`}>{comment.id} - {comment.name}</Link>
                    </li>
                })
            }
        </ul>

    </div>
}

//Comments Details component
const CommentsDetails = () => {
    //route parameters
    const { id } = useParams()
    let history = useHistory()

    const moveToUserPage = () => {
        history.push('/users')
    }
    return <><h1>
        Comments Detail Page
    </h1>
        <h2>{id} details</h2>
        <h2>write api call here to fetch particular comment</h2>
        <button onClick={moveToUserPage}>Go to Users Page</button>
    </>
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
                    <li>
                        <Link to="/comments">Comments</Link>
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
                <Route path="/comments">
                    <Comments />
                </Route>
                <Route path="/detail/:id">
                    <CommentsDetails />
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