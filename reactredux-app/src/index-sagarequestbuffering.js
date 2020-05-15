import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { put, fork, take, spawn,actionChannel } from 'redux-saga/effects'

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
window.store = store;

store.subscribe(function () {
    console.log(store.getState());
})
//root saga/ main
function* main() {
    console.log('starts')
    //In this lesson we will show how to handle multiple effects in a 
    //synchronous manner. Redux Saga gives us the actionChannel effect which gives us the power to queue requests.
    const actionchannel = yield actionChannel('HELLOREQUEST')
    while (true) {
        yield take(actionchannel)
        yield put({ type: 'HELLO', message: 'Hello while loop' })
    }
    console.log('ends')

}
//will kick start saga engine.
sagaMiddleware.run(main);
store.dispatch({ type: 'HELLOREQUEST' })


