import { createStyles, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyle = makeStyles(() => createStyles({
    footer: {
        backgroundColor: '#fdcb6e',
        textAlign:'center',
        color: '#7B524C',
        fontWeight: 'bold',
        clear: 'both',
        height: '35px',
        paddingTop: '20px',
    },
}))

const Footer = () => {
    const classes = useStyle()
    return (
        <footer className={classes.footer}>
           “Be the change you want to see in the world.”
        </footer>
    );
  }
  
  export default Footer;
  