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
        default:
            return message;
    }
}
const store = createStore(GreeterReducer, applyMiddleware(sagaMiddleware));

store.subscribe(function () {
    console.log(store.getState());
})

//api layer ; 

function getMessage() {
    return Promise.resolve('Hello I am from promise')
}


//worker saga : FOR HELLO ACTION
//spins a separate thread
function* helloSaga() {
    //call effect will block the generator , until the result is result is returned
    let message = yield call(getMessage)
    yield put({ type: 'HELLO', message: message })
}


//root saga/ main
function* main() {
    console.log('main starts')
    //take + fork
    //yield takeEvery('HELLOREQUEST', helloSaga)
    yield takeLatest('HELLOREQUEST', helloSaga);

    console.log('main ends')
}
//will kick start saga engine.
sagaMiddleware.run(main);

//start sending HELLOREQUEST
store.dispatch({ type: 'HELLOREQUEST' })
