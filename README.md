## REDUX REVIEW
Redux is a state management tool designed to keep track of it's own state, accessible to an file in the component tree. Redux is used as an alternative to 'Prop drilling', the process of passing props through multiple components in order to get data to one specific location. The following is an example of how to apply Redux to your React application using the 'ducks model'.

### Objective
- Set up the Store
- Reducer ( initial state, action types/constants, action creator, reducer )
- Connecting to components
- Combined Reducer
- Asynchronous Reducer

## links

1. **[Store](#Start-at-the-store)**
2. **[Reducer](#Set-up-the-reducer)**
3. **[Connect](#Connecting-to-components)**
4. **[Combined Reducer](#Combined-Reducer)**
5. **[Asynchronous Reducer](#Asynchronous-Reducer)**

## Installation

Let's initially install 2 packages, redux and react-redux.

 ```npm i redux react-redux```

These packages fulfill the bulk of our needs from redux.

## Ducks Model 🦆

The Redux Ducks model is a way of organizing all the pieces needed to use Redux with React. In this model, we compile all the necessary parts in 2 files, store.js and reducer.js that are held in a folder called 'ducks'.

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

## Connecting to components

After the reducer is set up, it's time to connect the redux state and action creators to your file. First, you need to wrap your application in whats called the 'Provider' to make the store available. 

Check out the following example of App.js

```js
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './ducks/store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <div className="App"/>
      </Provider>
    );
  }
}

export default App;

```

In this component, we wrap the entirety of our app (located in the div) with the Provider, which we import from 'react-redux'. Don't forget to pass in the store as a prop.


We can now access the data and functions inside our reducer. In a stateful component, we will destructure 'connect' on the import of 'react-redux'.

```js
import { connect } from 'react-redux'
```

Then create a function called 'mapStateToProps', taking in 1 argument (state), and returning an object that will be merged with the components props. You will find access to this state through 'this.props'.

You will then pass the function in the invocation of connect, which is exported from the component. Don't forget to also export the component itself!

```js
const mapStateToProps = state => {
    const {name, email} = state
    return {
        name,
        email
    }
}

export default connect(mapStateToProps)(Home)
```

This process grants you access to the state of the reducer! However, that alone is not very helpful, especially if you intend to alter that information in some way. To do this, we need to access to the action creators we wrote in the reducer. 

A few steps...

    - First import the action creators you need at the top of the component.
    - Then dispatch those (as an object, as the second argument of connect, after mapStateToProps)
    - This allows the functions to be merged with props.

Take a look a this following syntax...

```js
import { updateName, updateEmail} from '../../ducks/reducer';

...

const mapStateToProps = state => {
    const {name, email} = state
    return {
        name,
        email
    }
}

export default connect(mapStateToProps, {updateName, updateEmail})(Home)
```

In this example, we not only bring in the state and the 2 action creators from the reducer, but we now have access (through props) to use them to update/edit the information that we need.


## Connecting functions to components

After merging your state into your components props, you may need access to the action creators from your reducer. To do that, begin my importing them into your component...

```js
import { updateName, updateEmail } from '../../ducks/reducer'
```

Next, dispatch them inside the invocation of connect in the export of your component.

```js

export default connect(mapStateToProps, {updateName, updateEmail})(Home)
```

You now have access to those functions you created in your reducer through props.


## Combined Reducer

You can have as many reducers as you please, but you are only able to have 1 store. In order to have access to multiple reducers, you will need to set up a few more things in your store.

Consider the following example..

```js
import { createStore, combineReducers } from 'redux';

import reducer from './reducer';
import asyncReducer from './asyncReducer';

const combined = combineReducers({
    reducer,
    asyncReducer
});

export default createStore(combined);
```

Notice how I destructured 'combineReducers' off of redux, and then passed each of the reducers that are needed inside the invocation of said combineReducers. Be aware, this create an object with 2 key/value pairs, as opposed to the previous example of the store where there was only one option. 

## Asynchronous Reducer

An asynchronous reducer may be used if you need more to place axios calls in your reducer. This requires 2 more additions to your store, as well as installing another package. You need to destructure `applyMiddleware` from redux, and `promiseMiddleware` from redux-promise-middleware. Be sure to install 'redux-promise-middleware' from npm or yarn.

Check out the store to find an example of how this would change that setup. This changes the original setup of your store.

Inside your reducer, import axios, and place whatever call you need inside the paylod of your action creator.

```js
export const getCharacters = () => {
    return {
        type: GET_CHARACTERS,
        payload: axios.get('https://www.breakingbadapi.com/api/characters')
    }
}

```

This looks very similar to how we set up our action creators previously. 

Check out the reducer in `asyncReducer.js` file in the ducks folder. This example shows how you could handle the axios call. 