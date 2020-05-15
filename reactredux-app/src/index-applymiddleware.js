import { createStore, applyMiddleware } from 'redux';
import { INCREMENT, DECREMENT } from './actionconstants';

//actions
export const incrementAction = {
    type: INCREMENT
}
export const decrementAction = {
    type: DECREMENT
}
//arrow functions
export const CounterReducer = (state = 0, { type }) => {
    switch (type) {
        case INCREMENT:
            //return new state
            return state + 1;
        case DECREMENT:
            //return new state
            return state - 1;
        default:
            //must return default state
            return state;
    }
}

//simple Logger Middleware : logs every action dispatch.
const LoggerMiddleware = function (store) {
    return function (next) {
        return function (action) {
            //middleware logic
            console.info(`dispatching `, action);
            let result = next(action);
            console.log(`next state`, store.getState());
            return result;
        }
    }
}


const middlewares = applyMiddleware(LoggerMiddleware)

//create Store Object
const appStore = createStore(CounterReducer, middlewares)

//calling store methods
appStore.subscribe(() => {
    //get the new state
    // console.log(appStore.getState());
});

appStore.dispatch(incrementAction)
appStore.dispatch(incrementAction)
appStore.dispatch(incrementAction)



