import React, { Component } from 'react';
import { connect } from 'react-redux';

class home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <p>My name is {this.props.name}!</p>
            </div>
        );
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(home);