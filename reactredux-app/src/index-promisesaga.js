import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { put, call, takeEvery, takeLatest } from 'redux-saga/effects'

//create saga middleware
const sagaMiddleware = createSagaMiddleware();

//reducer
const GreeterReducer = (message = 'greet', action) => {
    switch (action.type) {
        case 'HELLO':
            return action.message
        case 'ERROR':
            return action.message
        default:
            return message;
    }
}
const store = createStore(GreeterReducer, applyMiddleware(sagaMiddleware));

store.subscribe(function () {
    console.log(store.getState());
})

//api layer ; 

function getUser() {
    //mock data
    let name = 'Subramanian';
    //let name = null;
    return new Promise((resolve, reject) => {
        if (name) {
            resolve(name);
        } else {
            reject('User Name not Found!!!');
        }
    });
}


//worker saga : FOR HELLO ACTION
//spins a separate thread
function* userSaga() {
    try {
        //call effect will block the generator , until the result is result is returned
        let name = yield call(getUser)
        let message = `Hello Mr ${name}`;
        yield put({ type: 'HELLO', message: message })
    }
    catch (e) {
        yield put({ type: 'ERROR', message: e })
    }
}


//root saga/ main
function* main() {
    console.log('main starts')
    yield takeLatest('HELLOREQUEST', userSaga);
    console.log('main ends')
}
//will kick start saga engine.
sagaMiddleware.run(main);

//start sending HELLOREQUEST
store.dispatch({ type: 'HELLOREQUEST' })
