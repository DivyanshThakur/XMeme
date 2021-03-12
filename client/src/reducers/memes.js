import {UPDATE, DELETE, FETCH_ALL, CREATE} from '../constants/actionTypes';

const reducer = (memes = [], action) => {
    switch(action.type) {
        case DELETE:
            return memes.filter((meme) => meme.id !== action.payload);

        case UPDATE:
            return memes.map((meme) => meme.id === action.payload.id ? action.payload : meme);

        case FETCH_ALL:
            return action.payload;

        case CREATE:
            return [action.payload,...memes];

        default:
            return memes;
    }
}

export default reducer;