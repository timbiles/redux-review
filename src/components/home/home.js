import React, { Component } from 'react';
import { connect } from 'react-redux';

import './home.css';

class home extends Component {
    render() {
        console.log(this.props)
        return (
            <div className='home'>
                <h1>Home</h1>
                {this.props.name &&
                <p>My name is {this.props.name}!</p>
                }
            </div>
        );
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(home);