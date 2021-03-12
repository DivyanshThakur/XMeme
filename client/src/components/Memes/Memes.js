import React from 'react';
import useStyles from './styles.js';
import Meme, {Template} from './Meme/Meme.js';
import {Grid, Grow, Container} from '@material-ui/core';
import {useSelector} from 'react-redux';

const Memes = ({currentId, setCurrentId}) => {
    const classes = useStyles();
    const memes = useSelector((state) => state.memes);

    return (
        !memes.length ? (
            <Container className={classes.outerContainer}>
                <Grid container alignItems="stretch" spacing={3}>
                    <Grid item sm={12} lg={6}>
                        <Template/>          
                    </Grid>
                    <Grid item sm={12} lg={6}>
                        <Template/>          
                    </Grid>
                </Grid>
            </Container>
        ) : (
            <Container className={classes.outerContainer}>
                <Grid container className={classes.mainContainer} alignItems="stretch" spacing={3}>
                    {memes.map((meme) => (
                        <Grow in key={meme.id}>
                            <Grid item sm={12} lg={6}>
                                <Meme meme={meme} currentId={currentId} setCurrentId={setCurrentId}/>
                            </Grid>
                        </Grow>
                    ))}
                </Grid>
            </Container>
        )
    );
}

export default Memes;