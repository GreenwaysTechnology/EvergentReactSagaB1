//sending input to the reducer
import { createStore } from 'redux';

//actions constants
export const UPDATEPROFILE = 'UPDATEPROFILE'

//reducer
const initalState = {
    id: 1,
    name: 'Subramanian',
    city: 'Coimbatore'
}
export const updateProfileReducer = (state = initalState, action) => {

    //log actions and inital state : previous state 
    console.log(`action and previous state`)
    console.log(action, state)
    //action will have two things : type, input
    const { type, city } = action;
    switch (type) {
        case UPDATEPROFILE:
            return Object.assign({}, state, { city });
        default:
            return state;
    }
}

//store
const appStore = createStore(updateProfileReducer);

//subscription
appStore.subscribe(function () {
    //current state
    console.log(`Current state`)
    console.log(appStore.getState());
})
//start dispacthing
//sending input, which is hardcoded
appStore.dispatch({ type: UPDATEPROFILE, city: 'Chennai' })

//what if i want to pass input  which is user input.

//action creators
// function updateProfileActionCreatore(city) {
//     //retun action object
//     return {
//         type: UPDATEPROFILE,
//         city: city
//     }
// }
// arrow version
const updateProfileActionCreatore = city => ({
    type: UPDATEPROFILE,
    city
});

appStore.dispatch(updateProfileActionCreatore('Pune'));
