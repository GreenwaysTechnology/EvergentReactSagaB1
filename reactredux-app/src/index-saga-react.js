import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { put, takeEvery, takeLatest, delay, call } from 'redux-saga/effects'
import { connect, Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';

const FETCHUSERFAILED = 'FETCHUSERFAILED'
const FETCHUSERSUCCESS = 'FETCHUSERSUCCESS'

const reducer = (state = [], action) => {
    const { type, users, err } = action;
    switch (type) {
        case FETCHUSERSUCCESS:
            return state.concat(users);
        case FETCHUSERFAILED:
            return err
        default:
            return state;
    }
}

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleWare))


//api
function fetchUser(url) {
    return fetch(url).then(res => res.json()); //returns promise
}

function* fetchUserSaga() {
    try {
        const url = 'https://jsonplaceholder.typicode.com/users'
        const users = yield call(fetchUser, url);
        //dispatch action
        yield put({ type: FETCHUSERSUCCESS, users });

    }
    catch (e) {
        yield put({ type: FETCHUSERFAILED, message: e.message });

    }
}


//entry point
function* root() {
    yield takeLatest('FETCHUSER', fetchUserSaga)
}

sagaMiddleWare.run(root);
/////////////////////////////////////////////////////////////////////////////////////

function mapStateToProp(users) {
    return {
        users
    }
}
//users component
const UsersComponent = props => {
    return <div>
        <h1>Users List</h1>
        <button onClick={() => {
                 props.dispatch({ type: 'FETCHUSER' })
        }}>Load Users</button>

        <ul>
            <h1>count {props.users.length}</h1>
            {
                props.users.map((user, index) => {
                    return <li key={index}>
                        <span>
                            {user.username} {user.email}
                        </span></li>
                })
            }
        </ul>
    </div>
}
const UserHOC = connect(mapStateToProp)(UsersComponent)
const App = () => <>
    <Provider store={store}>
        <UserHOC />
    </Provider>
</>

render(<App />, document.getElementById('root'));