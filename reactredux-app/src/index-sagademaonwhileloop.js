import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { put, take, fork, takeLatest } from 'redux-saga/effects'

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
function* hellosaga() {
    yield put({ type: 'HELLO', message: 'Hello Saga' })
}
//root saga/ main
function* main() {
    console.log('main starts')
    while (true) {
        yield take('HELLOREQUEST')
        yield fork(hellosaga)
    }
    console.log('main ends')
}
//will kick start saga engine.
sagaMiddleware.run(main);

//start sending HELLOREQUEST
store.dispatch({ type: 'HELLOREQUEST' })
