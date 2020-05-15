import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { put, delay, takeEvery, takeLatest } from 'redux-saga/effects'

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

//worker saga : FOR HELLO ACTION
//spins a separate thread
function* helloSaga() {
    //dont dispatch HELLO action to the store,rather wait for some time
    //block until timeout happens
    yield delay(5000);
    yield put({ type: 'HELLO', message: 'hello world' })
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
