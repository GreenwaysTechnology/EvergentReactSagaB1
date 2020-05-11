import { createStore } from 'redux';
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


//create Store Object
const appStore = createStore(CounterReducer)

//calling store methods
appStore.subscribe(() => {
    //get the new state
    console.log(appStore.getState());
});

appStore.dispatch(incrementAction)
appStore.dispatch(incrementAction)
appStore.dispatch(incrementAction)
appStore.dispatch(incrementAction)
//pass action object directly
appStore.dispatch({ type: INCREMENT });
appStore.dispatch(decrementAction)
appStore.dispatch(decrementAction)