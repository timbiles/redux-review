## REDUX REVIEW
Redux is a state management tool designed to keep track of it's own state, accessible to an file in the component tree. Redux is used as an alternative to 'Prop drilling', the process of passing props through multiple components in order to get data to one specific location. The following is an example of how to apply Redux to your React application using the 'ducks model'.

### Objective
- Set up the Store
- Reducer ( initial state, action types/constants, action creator, reducer )
- Connecting to components
- Combined Reducer
- Asynchronous Reducer

## Installation

Let's initially install 2 packages, redux and react-redux.

 ```npm i redux react-redux```

These packages fulfill the bulk of our needs from redux.

## Start at the store

After the packages are installed, we will create a file called 'store.js'. The store is a javascript object that tracks the data of our application. You will only ever need 1 store.

To set-up, destructure 'createStore' within the import of redux, and import the reducer (make sure the file path is correct). You will then `export default` the invocation of createStore, passing in the name of your reducer.

```js
import {createStore} from 'redux'
import reducer from './reducer'

export default createStore(reducer)
```

## Set up the reducer

Once the store is created, we will then create a file called 'reducer.js'. The reducer file will hold 4 major items that we need. 

    - The state that you wish to use, called 'initialState'.
    - Action types or constants. 
    - Action creators, a function that returns an action.
    - The reducer (Think of this as a one event handler to hold them all).

To start, we will initialize the state object similarly to how you would in the constructor of a component. The difference here is that we call this 'initialState'.

```js
const initialState = {
    name: 'Jon Snow',
    email: 'thekingofthenorth@knightswatch.com'
}
```

Next, we will assign our action types, also known as constants. This process is not necessary, however it allows the code to be far more readable, helps with the naming convention on a much larger application, and keeps them from being reused. It is standard javascript convention to capitalize constants.

```js
const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_EMAIL = 'UPDATE_EMAIL';
```

We then create our action creators. These functions will return a object with 2 keys/value pairs: `type` and `payload`. Type we get from the action types, and payload is what is being target.

```js
export const updateEmail = email => {
  return {
    type: UPDATE_EMAIL,
    payload: email
  };
};
```

To finish, we then export the reducer, which is a function that takes in the current state and an action (or the description of the change that we want to make). A reducer takes in 2 arguments: state and action, and we use a switch statement to evaluate the action types that are being called.

```js
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_NAME:
            return Object.assign({}, state, {name: action.payload})
        case UPDATE_EMAIL:
            return {
                ...state,
                email: action.payload
            }
        default:
        return state;
    }
}
```