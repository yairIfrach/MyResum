import { makeStyles, createStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => createStyles({
    langComponent: {
        flex: '1.8',
    },
    title: {
        display: 'flex',
        textDecoration: 'underline',
        fontWeight: 'bold',
        fontSize: '23px',
        marginLeft: '-10px',
    },
    image: {
        width: '24px',
        height: '24px',
    },
    lang: {
        listStyleType: 'circle',
    },
}))
const images = [
    {
        id: 1,
        url: "/images/language.png"
    },
    {
        id: 2,
        url: "/images/actuar.png"
    }
]
const Lang = () => {
    const classes = useStyles()
    return (
        <div className={classes.langComponent}>
            <div className={classes.title}>
                <img className={classes.image} src="/images/language.png" alt="langs" />
                Languages
            </div>
            <ul className={classes.lang}>
                <li>Hebrew - native level</li>
                <li>English - professional level</li>
            </ul>
        </div>
    );
}

export default Lang;