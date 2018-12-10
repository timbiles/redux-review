import axios from 'axios';

const initialState = {
    characters: [],
    isLoading: false
}

const GET_CHARACTERS = 'GET_CHARACTERS'

export const getCharacters = (characters) => {
    return {
        type: GET_CHARACTERS,
        payload: axios.get('https://www.breakingbadapi.com/api/characters')
    }
}

export default function reducer(state = initialState, action){
    switch(action.type) {
        case `${GET_PEOPLE}_PENDING`:
        return {
            ...state,
            isLoading: true
        };
        case `${GET_PEOPLE}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                characters: action.paylod.data
            }
        case `${GET_PEOPLE}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                err: true
            }
        default:
        return state;
    }
}