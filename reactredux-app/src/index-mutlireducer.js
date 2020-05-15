//react-redux integration
import { createStore, combineReducers } from 'redux';
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

const decrementReducer = (state = 10, action) => {

    const { type } = action;
    switch (type) {
        case DECREMENT:
            return state - 1
        default:
            return state;
    }
};

//store
const reducerConfig = {
    incrementReducer,
    decrementReducer
}
const rootReducers = combineReducers(reducerConfig)
const appStore = createStore(rootReducers);
/////////////////////////////////////////////////////////////////////////////////
//step 2 : state mapper function
//state is arg: redux whole state (getState())

//increment mapper
const incrementMapper = state => {
    //store.getState() => {reducer:state}
    console.log(state.incrementReducer);
    let inccounter = state.incrementReducer
    return {
        inccounter
    }
}

//decrement mapper
const decrementMapper = state => {
    console.log(state.decrementReducer);
    let deccounter = state.decrementReducer
    return {
        deccounter
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
        },
        onDecrement: function () {
            dispatch({ type: DECREMENT })
        }
    }

}

////////////////////////////////////////////////////////////////////////////////
//Step 3: Declare React component

const IncrementContainerComponent = props => {
    return <CounterSubContainer {...props} />
}

const DecrementContainerComponent = props => {
    return <CounterSubContainer {...props} />
}

//coimbine two containers and pass value to presentationals
const CounterSubContainer = props => {
    //console.log('counter sub container')
    //console.log(props)
    return <>
        <CounterDisplay {...props}/>
    </>
}

//presentational components
const CounterDisplay = props => {

    const { deccounter, inccounter, onIncrement,onDecrement } = props;
    return <div>
        <h1>React - Redux - Counter App</h1>
        <h2>Increment : {inccounter}</h2>
        <h2>Decrement : {deccounter}</h2>

        <button onClick={() => {
            onIncrement()
        }}>Increment</button>
          <button onClick={() => {
            onDecrement()
        }}>Decrement</button>
    </div>
}

/////////////////////////////////////////////////////////////////////////////////
//step 4 : create high order component ; Container Component

const IncrementHOC = connect(incrementMapper, mapDispatchToProp)(IncrementContainerComponent);

const DecrementHOC = connect(decrementMapper, mapDispatchToProp)(DecrementContainerComponent);

//////////////////////////////////////////////////////////////////////////

//Step 5 : Component rendering

const App = () => <>
    <Provider store={appStore}>
        <IncrementHOC />
        <DecrementHOC />
    </Provider>
</>

render(<App />, document.getElementById('root'));