import React, { forwardRef } from 'react';
import { Slide, DialogTitle, Dialog, Button, DialogContent, DialogActions } from '@material-ui/core';
import { onStyleButton } from '../../sherd/gameStyle'



const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const Intro = (props) => {
    const { handleIsIntro, handleIsDialog } = props
    const classes = onStyleButton()

    const handleContinueGame = () => {
        handleIsIntro(false)
    }

    const handleCloseGame = () => {
        handleIsDialog(false)
    }

    return (
        <div className={classes.closeImg}>
            <Dialog
                open={true}
                TransitionComponent={Transition}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                onClose={handleCloseGame}
            >
                <DialogTitle id="alert-dialog-title">
                    <span variant="div">Yair has a twin! Try to identify in the picture who is Yair and who is his twin ...</span>
                </DialogTitle>
                <DialogContent>
                    Initially, two photos of Yair will be shown. Try to remember well!
                </DialogContent>
                <DialogActions >
                    <Button className={classes.leftButton} onClick={handleCloseGame}> I do not have time for games</Button>
                    <Button className={classes.righetButton} onClick={handleContinueGame} >I want to try</Button>
                </DialogActions>

            </Dialog>
        </div>
    );
}

export default Intro;