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
//dispatch mapper : function as prop
function mapDispatchToProp(dispatch) {
    //return configuration object : key :value
    //key is going to be react propery : function as prop
    //value is going to be function
    return {
        onIncrement: function () {
            dispatch({ type: INCREMENT })
        }
    }

}

////////////////////////////////////////////////////////////////////////////////
//Step 3: Declare React component

const IncrementContainerComponent = props => {
    return <IncrementDisplay {...props} />
}

//presentational components
const IncrementDisplay = props => {
    const { counter, onIncrement } = props;
    return <div>
        <h1>React - Redux - Counter App</h1>
        <h2>Increment : {counter}</h2>
        <button onClick={() => {
            onIncrement()
        }}>Increment</button>
    </div>
}

/////////////////////////////////////////////////////////////////////////////////
//step 4 : create high order component ; Container Component
const IncrementHOC = connect(mapStateToProp, mapDispatchToProp)(IncrementContainerComponent);
//////////////////////////////////////////////////////////////////////////

//Step 5 : Component rendering

const App = () => <>
    <Provider store={appStore}>
        <IncrementHOC />
    </Provider>
</>

render(<App />, document.getElementById('root'));