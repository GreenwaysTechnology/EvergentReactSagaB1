//multi reducer;
//sending input to the reducer
import { createStore, combineReducers } from 'redux';
import { INCREMENT, DECREMENT } from './actionconstants';


//actions constants profile
export const UPDATEPROFILE = 'UPDATEPROFILE'
//counters
export const incrementAction = {
    type: INCREMENT
}
export const decrementAction = {
    type: DECREMENT
}

export const CounterReducer = (state = {
    counter: 10
}, { type }) => {
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



//reducer
const initalState = {
    id: 1,
    name: 'Subramanian',
    city: 'Coimbatore'
}
export const updateProfileReducer = (state = initalState, action) => {
    const { type, city } = action;
    switch (type) {
        case UPDATEPROFILE:
            return Object.assign({}, state, { city });
        default:
            return state;
    }
}

// const reducerConfig = {
//     CounterReducer: CounterReducer,
//     updateProfileReducer: updateProfileReducer
// }
const reducerConfig = {
    CounterReducer,
    updateProfileReducer
}
const rootReducer = combineReducers(reducerConfig)
//store
const appStore = createStore(rootReducer);

//subscription
appStore.subscribe(function () {
    //current state
    console.log(`Current state`)
    //console.log(appStore.getState());
    const { CounterReducer, updateProfileReducer } = appStore.getState()
    console.log(updateProfileReducer,CounterReducer)
})

appStore.dispatch({ type: UPDATEPROFILE, city: 'Chennai' })

const updateProfileActionCreatore = city => ({
    type: UPDATEPROFILE,
    city
});

appStore.dispatch(updateProfileActionCreatore('Pune'));
appStore.dispatch({ type: INCREMENT });
appStore.dispatch(decrementAction)
