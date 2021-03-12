import {UPDATE, DELETE, FETCH_ALL, CREATE} from '../constants/actionTypes';
import * as api from '../api';

// Action Creators
export const getMemes = () => async (dispatch) => {
    try {
        const {data} = await api.fetchMemes();
        dispatch({type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const createMeme = (meme) => async (dispatch) => {
    try {
        const res = await api.createMeme(meme);

        if(res.status === 201){
            const body = res.data;
            const {data} = await api.getMemeById(body.id);
            dispatch({type: CREATE, payload: data});
        }

    } catch (error) {
    
        console.log(error);
    }
}

export const updateMeme = (id, meme) => async (dispatch) => {
    try {
        await api.updateMeme(id, meme);
        const {data} = await api.getMemeById(id);
        dispatch({type: UPDATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deleteMeme = (id) => async (dispatch) => {
    try{
        await api.deleteMeme(id);
        dispatch({type: DELETE, payload: id});
    } catch(error) {
        console.log(error);
    }
}

export const likeMeme = (id) => async (dispatch) => {
    try {
        const {data} = await api.likeMeme(id);
        dispatch({type: UPDATE, payload: data});
    }catch(error) {
        console.log(error);
    }
}