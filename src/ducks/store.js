///////////EXAMPLE OF COMBINED REDUCERS //////////////

// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { promiseMiddleWare } from 'react-promise-middleware'

// //bring in the reducer(s)
// import reducer from './reducer';

// const combined = combineReducers({
//     userReducer,
//     otherReducer
// });

// const middlewares = applyMiddleware(promiseMiddleWare())

// const store = createStore(combined, middlewares)


// export default store;




// install redux and react-redux
//bring in the reducer(s)

import { createStore } from 'redux';

import reducer from './reducer';

export default createStore(reducer);

