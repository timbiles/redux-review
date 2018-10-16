import React, { Component } from 'react';
import { connect } from 'react-redux';

import './about.css';
import {
  updateName,
  updateEmail,
  updateBirthday,
  updateHobbies
} from '../../ducks/reducer';

class about extends Component {
  render() {
    const {
      updateName,
      updateEmail,
      updateBirthday,
      updateHobbies
    } = this.props;
    return (
      <div className="about">
        <h1>About</h1>
        <div>
          <h4>Name:</h4>
          <input type="text" onChange={e => updateName(e.target.value)} />
        </div>
        <div>
          <h4>Email:</h4>
          <input type="text" 
           onChange={e => updateEmail(e.target.value)}
          />
        </div>
        <div>
          <h4>Birthday:</h4>
          <input type="text" 
           onChange={e => updateBirthday(e.target.value)}
          />
        </div>
        <div>
          <h4>Hobbies:</h4>
          <input type="text" 
             onChange={e => updateHobbies(e.target.value)}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { updateName, updateEmail, updateBirthday, updateHobbies }
)(about);
