import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { put, fork, take, spawn } from 'redux-saga/effects'

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
//root saga/ main
function* main() {
    console.log('main starts')
    //sending request / dispatching an action
    //put is effect (method)
    yield put({ type: 'HELLO', message: 'Hello saga' })
    console.log('main ends')

}
//will kick start saga engine.
sagaMiddleware.run(main);
