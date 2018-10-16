import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './nav.css'

class nav extends Component {
  render() {
    return (
      <div className='nav'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    );
  }
}

export default nav;
