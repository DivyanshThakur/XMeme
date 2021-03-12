import React from 'react';
import useStyles from './styles.js';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import {useDispatch} from 'react-redux';
import moment from 'moment';
import {deleteMeme, likeMeme} from '../../../actions/memes.js';
import Skeleton from '@yisheng90/react-loading';

export const Template = () => {
    const classes = useStyles();

    return (
        <Card className={classes.template}>
            <CardContent>
            <Skeleton height="25px" width="100%"/>
            <Skeleton height="10px" width="5rem"/>
            <div style={{height: "1.5rem"}}/>
            <Skeleton height="10px" width="100%"/>
            <Skeleton height="10px" width="100%"/>
            <Skeleton height="10px" width="70%"/>
            <div style={{height: "1.5rem"}}/>
            <Skeleton height="20rem" width="100%"/>
            <div style={{height: "0.5rem"}}/>
            <Skeleton height="20px" width="100%"/>
            </CardContent>
        </Card>
    );
}

const Meme = ({meme, currentId, setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.card}>
            <CardContent>
            <Typography className={classes.name} variant="h5">{meme.name}</Typography>
            <Typography className={classes.moment} variant="body2">{moment(meme.createdAt).fromNow()}</Typography>
            <Typography className={classes.caption} variant="body1" >{meme.caption}</Typography>
            </CardContent>
            <div className={classes.overlay2}>
                <Button color="primary" title="Edit" size="small" onClick={() => setCurrentId(meme.id)}>
                    <MoreHorizIcon fontSize="default"/>
                    </Button>
            </div>
            <CardMedia component="img" className={classes.media} image={meme.url} title={meme.url} />
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(likeMeme(meme.id))}>
                    <ThumbUpAltIcon size="small"/>
                    &nbsp; Like &nbsp;
                    {meme.likeCount}
                </Button>

                <Button size="small" style={{color:'green'}} onClick={() => window.open(meme.url, "_blank")}>
                    <OpenInNewIcon size="small"/>
                    &nbsp; Open
                </Button>

                <Button disabled={currentId === meme.id? true: false} size="small" color="secondary" onClick={() => dispatch(deleteMeme(meme.id)) }>
                    <DeleteIcon size="small"/>
                    &nbsp; Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Meme;