import { makeStyles, createStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => createStyles({
    linkedProfile: {
        width: '75px',
        height: '75px',
    },
    image: {
        width: '75px',
        height: '75px',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        borderRadius: '10px',
        transition: '0.3s',
        cursor: 'pointer',
        margin: '5px',
        '&:hover': {
            boxShadow: '0 8px 16px 0 rgba(0,0,0,0.3)',
            width: '100px',
            height: '100px',
            transition: '0.4s',
        },
    }
}))


const LinkedProfile = (props) => {
    const classes = useStyles()
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer" >
            <div className={classes.LinkedProfile} title={props.title} >
                <img className={classes.image} src={props.imgSource} alt={props.title} />
            </div>
        </a>
    );
}

export default LinkedProfile;