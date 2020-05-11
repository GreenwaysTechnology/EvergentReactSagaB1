import { createStore } from 'redux';


//reducer function : holds biz logic 
/**
 * pure function, which changes the state,
 * Should return always immutable data structure
 * which is eq to setState method in react
 * 
 * Reducer syntax;
 *  1.reducer function must take two args
 *     1.inital state value
 *           in react state must be always object
 *           here state can be even prmimitive also ,must be initalized to some value
 *     2.action information
 *          action is object , containing information about request
 *  
 * 2.function body 
 *    will have biz logics like add,remove,update
 *    must return state , including default state
 *  
 */
function CounterReducer(state = 0, action) {

    switch (action.type) {
        case 'INCREMENT':
            //return new state
            return state + 1;
        default:
            //must return default state
            return state;
    }

}


//create Store Object
const appStore = createStore(CounterReducer)

//calling store methods
appStore.subscribe(function () {
    //get the new state
    console.log(appStore.getState());
});

const incrementAction = {
    type: 'INCREMENT'
}

appStore.dispatch(incrementAction)
appStore.dispatch(incrementAction)
appStore.dispatch(incrementAction)
appStore.dispatch(incrementAction)