//react-redux integration
import { createStore, coimbineReducers } from 'redux';
import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { INCREMENT, DECREMENT } from './actionconstants';
//step 1 : Redux , Reducer,store actions
const incrementReducer = (state = 10, action) => {
    const { type } = action;
    switch (type) {
        case INCREMENT:
            return state + 1
        default:
            return state;
    }
};
//store
const appStore = createStore(incrementReducer);
/////////////////////////////////////////////////////////////////////////////////
//step 2 : state mapper function
//state is arg: redux whole state (getState())
function mapStateToProp(state) {
    //return configuration object : key : value
    //key is going to be react prop
    //value is going to be redux state
    return {
        counter: state
    }
}
////////////////////////////////////////////////////////////////////////////////
//Step 3: Declare React component

const IncrementContainerComponent = props => {
    return <IncrementDisplay {...props} />
}

//presentational components
const IncrementDisplay = props => {
    const { counter, dispatch } = props;
    //event listener
    const onIncrement = e => {
        //dispatch an action to increment value
        dispatch({ type: INCREMENT })
    }
    return <div>
        <h1>React - Redux - Counter App</h1>
        <h2>Increment : {counter}</h2>
        <button onClick={onIncrement}>Increment</button>
    </div>
}

/////////////////////////////////////////////////////////////////////////////////
//step 4 : create high order component ; Container Component
const IncrementHOC = connect(mapStateToProp)(IncrementContainerComponent);
//////////////////////////////////////////////////////////////////////////

//Step 5 : Component rendering

const App = () => <>
    <Provider store={appStore}>
        <IncrementHOC />
    </Provider>
</>

render(<App />, document.getElementById('root'));