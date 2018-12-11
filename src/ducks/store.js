///////////EXAMPLE OF COMBINED REDUCERS //////////////

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware'

//bring in the reducer(s)
import reducer from './reducer';
import asyncReducer from './asyncReducer';

const combined = combineReducers({
    reducer,
    asyncReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(promiseMiddleware()))


const store = createStore(combined, middlewares)


export default store;


////////////////EXAMPLE OF STORE WITH REDUX DEVTOOLS////////////////////

// install redux and react-redux
//bring in the reducer(s)

// import { createStore, compose } from 'redux';

// import reducer from './reducer';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export default createStore(reducer, composeEnhancers());

