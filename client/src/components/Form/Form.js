import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createMeme, updateMeme} from '../../actions/memes.js';
import {TextField, Container, Button} from '@material-ui/core';
import './style.css';

const Form = ({currentId, setCurrentId}) => {
    const [memeData, setMemeData] = useState({name:'', url:'', caption:''});
    const meme = useSelector((state) => currentId? state.memes.find((m) => m.id === currentId): null);
    const dispatch = useDispatch();

    useEffect(() => {
        if(meme) setMemeData(meme);
    }, [meme]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId){
            dispatch(updateMeme(currentId, memeData));
        }else {
            dispatch(createMeme(memeData));
        }

        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setMemeData({name:'', url:'', caption:''});
    }

    return (
        <Container className="paper">
                <form autoComplete="off" className="form" onSubmit={handleSubmit}>
                    <TextField required disabled={currentId? true: false} className="fileInput" name="name" variant="outlined" label="Full name" fullWidth value={memeData.name} onChange={(e) => setMemeData({...memeData, name: e.target.value})}/>
                    <TextField required className="fileInput"  name="caption" variant="outlined" label="Caption" fullWidth value={memeData.caption} onChange={(e) => setMemeData({...memeData, caption: e.target.value})}/>
                    <TextField required className="fileInput"  name="url" variant="outlined" label="Meme URL" fullWidth value={memeData.url} onChange={(e) => setMemeData({...memeData, url: e.target.value})}/>
                    <Button className="buttonSubmit" variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                    <Button variant="text" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                </form>
        </Container>
    );
}

export default Form;