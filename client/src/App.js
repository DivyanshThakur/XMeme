import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Container, Grow, Typography, Grid} from '@material-ui/core';
import Form from './components/Form/Form.js';
import Memes from './components/Memes/Memes.js';
import {getMemes} from './actions/memes.js';
import './App.css';
import useStyles from './styles.js';
import logo from './images/logo.png';

const App = () => {

    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getMemes());
    }, [currentId, dispatch]);

    return (
        <div>
            <Container className="glass">
                <Grid container justify="space-between" alignItems="stretch" spacing={6}>
                    <Grid className={classes.dashboard} item xs={12} sm={4}>
                    <Grow in>
                        <Container>
                            <Typography className={classes.title} variant="h2">X-MEME</Typography>
                            <img src={logo} alt="Logo" height="100px" className="logo"/>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Container>
                    </Grow>
                    </Grid>
                    <Grid className="memesGrid" item xs={12} sm={8}>
                        <Memes currentId={currentId} setCurrentId={setCurrentId}/>
                    </Grid>
                </Grid>
            </Container>
            <div className="circle1"/>
            <div className="circle2"/>
        </div>
    );
}

export default App;