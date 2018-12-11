import React, { Component } from 'react';
import { connect } from 'react-redux';

import './contact.css';

class contact extends Component {
 
  render() {
    const { name, email, birthday, hobbies } = this.props.reducer;

    return (
      <div>
        <h1>Contact</h1>
        <p>Hi, I'm {name}.</p>
        <p>My email is: {email}</p>
        <p>I like to... {hobbies}</p>
        <p>Don't forget to get me a present on my birthday: {birthday}</p>
      </div>
    );
  }
}

const mapStateToProps = state => state;

// const mapStateToProps = state => {
//     const {name, email, birthday, hobbies} = state

//     return { name, email, birthday, hobbies}
// };

export default connect(mapStateToProps)(contact);
