import React, { useState, forwardRef } from 'react';
import { Slide, createStyles, makeStyles, Typography, IconButton,
     DialogTitle, Dialog, Button, DialogContent, DialogActions, Grid } from '@material-ui/core';
     import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';



const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(() => createStyles({
    closeImg: {
        cursor: 'pointer',
        float: 'right',
        marginTop: '5px',
        width: '20px'
    },
}))

const Intro = (props) => {
    const { handleIsIntro, handleIsDialog } = props
    const classes = useStyles()

    const handleContinueGame = () => {
        handleIsIntro(false)
    }

    const handleCloseGame = () => {
        handleIsDialog(false)
    }

    return (
        <div className={classes.skills}>
            <Dialog
                open={true}
                TransitionComponent={Transition}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                onClose={handleCloseGame}
            >
                <DialogTitle id="alert-dialog-title">
                    <Typography variant="div">Yair has a twin! Try to identify in the picture who is Yair and who is his twin ...</Typography>
                </DialogTitle>
                <DialogContent>
                    Initially, two photos of Yair will be shown. Try to remember well!
                </DialogContent>
                <DialogActions >
                    <Button onClick={handleCloseGame}> I do not have time for games</Button>
                    <Button onClick={handleContinueGame} >I want to try</Button>
                </DialogActions>

            </Dialog>
        </div>
    );
}

export default Intro;