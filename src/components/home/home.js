import React, { Component } from 'react';
import { connect } from 'react-redux';

import './home.css';

class home extends Component {
    render() {
        return (
            <div className='home'>
                <h1>Home</h1>
                {this.props.reducer.name &&
                <p>My name is {this.props.reducer.name}!</p>
                }
            </div>
        );
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(home);