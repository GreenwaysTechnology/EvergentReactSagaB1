import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { put, all, take, takeLatest, takeEvery, select } from 'redux-saga/effects'


//create saga middleware
const sagaMiddleware = createSagaMiddleware();

//reducer
const GreeterReducer = (message = 'greet', action) => {
    switch (action.type) {
        case 'HELLO':
            return action.message
        case 'HAI':
            return action.message
        case 'SHOW_CONGRATULATION':
            return 'You won I phone!!!!..Cheers'
        default:
            return message;
    }
}
const store = createStore(GreeterReducer, applyMiddleware(sagaMiddleware));

store.subscribe(function () {
    console.log(store.getState());
})

//wath and Log each action and observe state : Logger.

function* watchAndLog() {
    //watch all actions, each request grab its action and state
    yield takeEvery('*', function* (action) {
        //state : select effect get the current store state
        const state = yield select();
        console.log('action', action);
        console.log('state', state);
    })
    //conditional listening : 
    /**
     * if an action called 'HAIREQUEST' is coming three times to the application
     *  // you can watch conditionally.
     */
    //using loop
    for (let i = 0; i < 3; i++) {
        yield take('HAIREQUEST');
    }
    yield put({ type: 'SHOW_CONGRATULATION' })

}


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
    yield all([watchAndLog(), haiModule(), helloModule()]);
}
//will kick start saga engine.
sagaMiddleware.run(main);

//start sending HELLOREQUEST
//store.dispatch({ type: 'HELLOREQUEST' })
store.dispatch({ type: 'HAIREQUEST' })
store.dispatch({ type: 'HAIREQUEST' })
store.dispatch({ type: 'HAIREQUEST' })



