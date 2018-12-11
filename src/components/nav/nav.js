import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './nav.css'

class nav extends Component {
  state = {
    links: ['Home', 'About', 'Contact', 'Random']
  }
  render() {
    const navMap = this.state.links.map(e => {
      return <Link key={e} to={e === 'Home' ? '/' : e}>
      {e}
      </Link>
    })
    return (
      <div className='nav'>
        {navMap}
      </div>
    );
  }
}

export default nav;
