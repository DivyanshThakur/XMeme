/* eslint-disable no-template-curly-in-string */
import axios from 'axios';

const url = 'https://xmeme-divyansh.herokuapp.com/memes';

export const fetchMemes = () => axios.get(url);
export const createMeme = (newMeme) => axios.post(url, newMeme);
export const updateMeme = (id, updatedMeme) => axios.patch(url + '/' + id,updatedMeme);
export const deleteMeme = (id) => axios.delete(url + '/' + id);
export const getMemeById = (id) => axios.get(url + '/' + id);
export const likeMeme = (id) => axios.patch(url + '/' + id + '/likeMeme');