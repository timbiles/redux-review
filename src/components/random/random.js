import React, { Component } from 'react';
import { connect } from 'react-redux';

import {getCharacters} from '../../ducks/asyncReducer';

class random extends Component {

    componentDidMount(){
        this.props.getCharacters()
    }

    render() {
        console.log(this.props.asyncReducer.characters)

        const map = this.props.asyncReducer.characters.map(e=> {
            return <div key={e.char_id}>
                <img style={{height: '200px'}} src={e.img} alt=""/>
            </div>
        })
        return (
            <div>
                {map}
            </div>
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {getCharacters})(random);