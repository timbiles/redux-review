import axios from 'axios';

const initialState = {
    characters: [],
    isLoading: false,
    err: false
}

const GET_CHARACTERS = 'GET_CHARACTERS'

export const getCharacters = () => {
    return {
        type: GET_CHARACTERS,
        payload: axios.get('https://www.breakingbadapi.com/api/characters')
    }
}

export default function reducer(state = initialState, action){
    switch(action.type) {
        case `${GET_CHARACTERS}_PENDING`:
        return {
            ...state,
            isLoading: true
        };
        case `${GET_CHARACTERS}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                characters: action.payload.data
            }
        case `${GET_CHARACTERS}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                err: true
            }
        default:
        return state;
    }
}