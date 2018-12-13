import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import {getCharacters} from '../../ducks/asyncReducer';

class random extends Component {
    state = {
        characters: []
    }

    componentDidMount(){
        // axios('https://www.breakingbadapi.com/api/characters')
        //     .then((res) => this.setState({characters: res.data}))

        this.props.getCharacters()
    }

    render() {
        console.log(this.props)
        const map = this.props.asyncReducer.characters.map(e => {
            return <div key={e.char_id}>
            <h4>{e.name}</h4>
            <img style={{width: '200px'}}src={e.img} alt="character profile"/>
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