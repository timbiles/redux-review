import { createStore } from 'redux';

//bring in the reducer(s)
import reducer from './reducer';

const store = createStore(reducer);

export default store;
