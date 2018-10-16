// install redux and react-redux

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { promiseMiddleWare } from 'react-promise-middleware'

//bring in the reducer(s)
import reducer from './reducer';

const combined = combineReducers({
    userReducer,
    otherReducer
});

const middlewares = applyMiddleware(promiseMiddleWare())

const store = createStore(combined, middlewares)


export default store;
