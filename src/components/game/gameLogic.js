import React, { useState, forwardRef } from 'react';
import {
    Slide, createStyles, makeStyles, Typography, IconButton,
    DialogTitle, Dialog, Button, DialogContent, DialogActions, Grid
} from '@material-ui/core';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { ImageGroup, Image } from 'react-fullscreen-image'


const _ = require('lodash');


const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="left" easing="20" timeout='30s' ref={ref} {...props} />;
});

const useStyles = makeStyles(() => createStyles({
    img: {
        width: '100%',
        height: '100%',
    }
}))

const GameLogic = (props) => {
    const { handleIsDialog } = props
    const classes = useStyles()

    const yairImgs = [
        {
            id: 1,
            src: '/images/IMG-20210910-WA0036.JPG',
            location: '',
        },
        {
            id: 2,
            src: '/images/first.JPG',
            location: '',
        },
        {
            id: 3,
            src: '/images/second.JPEG',
            location: '',
        },
    ]

    const handleCloseGame = () => handleIsDialog(false)

    const [titleMassege, setTitleMassege] = useState(false)
    const [currentYairImg, setCurrentYairImgs] = useState(yairImgs[0])


    const handleContinue = () => {
        _.isEqual(yairImgs[yairImgs.length - 2], currentYairImg) ? setTitleMassege(true) : setTitleMassege(false);
        setCurrentYairImgs(yairImgs[yairImgs.findIndex(x => x.id === currentYairImg.id) + 1])
    }

    const handleGoBack = () => {
        _.isEqual(yairImgs[yairImgs.length - 2], currentYairImg) ? setTitleMassege(true) : setTitleMassege(false);
        setCurrentYairImgs(yairImgs[yairImgs.findIndex(x => x.id === currentYairImg.id) - 1])
    }


    return (
        <div className={classes.skills}>
            <Dialog
                open={true}
                keepMounted
                onClose={handleCloseGame}
                TransitionComponent={Transition}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>
                    <Grid container justify="space-between" alignItems="center">
                        <Typography variant="div">{titleMassege ? `Start playing!` : `Take a good look he's Yair`}</Typography>
                        <IconButton onClick={handleCloseGame} >
                            <CloseOutlinedIcon />
                        </IconButton>
                    </Grid>
                </DialogTitle>
                <DialogContent >
                    <Image className={classes.img} src={currentYairImg.src} alt={currentYairImg.id}  />
                </DialogContent>
                <DialogActions >
                    <Grid container justify="space-around" alignItems="center">
                        <Button onClick={handleGoBack}>Go back</Button>
                        <Button onClick={handleContinue}> {titleMassege ? 'start the game' : 'Continue'} </Button>
                    </Grid>

                </DialogActions>

            </Dialog>
        </div>
    );
}

export default GameLogic;