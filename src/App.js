import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './ducks/store';
import routes from './routes';
import Nav from './components/nav/nav';
import './App.css';

//Wrap what you need access to in the provider. Remember to import Provider.

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
          <Nav />
          {routes}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
