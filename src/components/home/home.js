import React, { Component } from 'react';
import {connect} from 'react-redux';

import './home.css';

class home extends Component {
  render() {
      console.log(this.props)
    return <div>
        <h1>Home</h1>
        <p>{this.props.name}</p>
        <p>{this.props.email}</p>
    </div>;
  }
}

const mapStateToProps = state => {
    const {name, email, birthday, hobbies} = state
    return {
        name: name,
        email: email,
        birthday: birthday,
        hobbies: hobbies
    }
}

export default connect(mapStateToProps)(home);
