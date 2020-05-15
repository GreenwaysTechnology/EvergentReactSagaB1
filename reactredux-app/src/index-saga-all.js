import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { put, all,  takeLatest } from 'redux-saga/effects'


//create saga middleware
const sagaMiddleware = createSagaMiddleware();

//reducer
const GreeterReducer = (message = 'greet', action) => {
    switch (action.type) {
        case 'HELLO':
            return action.message
        case 'HAI':
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
    //dispatch an action to the store
    yield put({ type: 'HELLO', message: 'hello world' })
}

function* haiSaga() {
    //dispatch an action to the store
    yield put({ type: 'HAI', message: 'hai' })
}

function* haiModule() {
    yield takeLatest('HAIREQUEST', haiSaga);
}

function* helloModule() {
    yield takeLatest('HELLOREQUEST', helloSaga);

}


//root saga/ main
function* main() {
    yield all([haiModule(), helloModule()]);
}
//will kick start saga engine.
sagaMiddleware.run(main);

//start sending HELLOREQUEST
store.dispatch({ type: 'HELLOREQUEST' })
store.dispatch({ type: 'HAIREQUEST' })

