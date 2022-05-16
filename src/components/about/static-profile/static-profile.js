import { createStyles, makeStyles} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => createStyles({
    staticProfile: {
        display: 'flex',
        width: '150px',
        height: '30px',
        alignItems: 'center',
    },
    image: {
        width: '30px',
        height: '30px',
    },
    name: {
        fontStyle: 'italic',
        fontSize: '15px',
        margin: ' 7px'
    }

}))

const StaticProfile = (props) => {
    const classes = useStyles()
    return (
        <span className={classes.staticProfile} title={props.title}>
            <img className={classes.image} src={props.imgSource} alt={props.title} />
            <p className={classes.names}>{props.name}</p>
        </span>
    );
}

export default StaticProfile;