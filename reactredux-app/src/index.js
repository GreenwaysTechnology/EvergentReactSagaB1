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
const initalState = {
    counter: 10
}
export const CounterReducer = (state = initalState, { type }) => {
    switch (type) {
        case INCREMENT:
            //return new state
            let counter = state.counter + 1;
            // return Object.assign({}, state, { counter })
            return { ...state, counter };
        case DECREMENT:
            //return new state
            let deccounter = state.counter - 1;
            return Object.assign({}, state, { counter: deccounter })
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