import React, { useState, forwardRef, useEffect } from 'react';
import {
    Slide, createStyles, makeStyles, Typography, IconButton,
    DialogTitle, Dialog, Button, DialogContent, DialogActions, Grid
} from '@material-ui/core';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { ImageGroup, Image } from 'react-fullscreen-image'
import { allImage, exemplImgs, twinImg } from './images';


const _ = require('lodash');


const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="left" easing="20" timeout='30s' ref={ref} {...props} />;
});

const useStyles = makeStyles(() => createStyles({
    img: {
        width: '100%',
        height: '100%',
    },
    frame: {

     }
}))

const GameLogic = (props) => {
    const { handleIsDialog } = props
    const classes = useStyles()

    const handleCloseGame = () => handleIsDialog(false)

    const gmaeDialogTitle = ['Take a good look he is Yair', 'Start playing!', 'Who is this guy?', 'You won! Well done!', 'Yair and Eviatar are not so similar. Go for a vision test']


    const [isGame, setIsGame] = useState(false)
    const [titleMassege, setTitleMassege] = useState(gmaeDialogTitle[0])
    const [disabledGoBack, setDisabledGoBack] = useState(true)
    const [calcScore, setCalcScore] = useState({ errorAns: 0, correctAns: 0 })
    const [currentImg, setCurrentImg] = useState(exemplImgs[0])

    const handleRightButtom = () => {

        if (!isGame) {
            setDisabledGoBack(false)
            _.isEqual(exemplImgs[exemplImgs.length - 2], currentImg) ? setTitleMassege(gmaeDialogTitle[1]) :
                setTitleMassege(gmaeDialogTitle[2]);
            _.isEqual(exemplImgs[exemplImgs.length - 1], currentImg) ? startGame() :
                setCurrentImg(exemplImgs[exemplImgs.findIndex(x => x.id === currentImg.id) + 1])
        } else {
            currentImg.isYair ?
                setCalcScore({ ...calcScore, ['correctAns']: calcScore['correctAns'] + 1 }) :
                setCalcScore({ ...calcScore, ['errorAns']: calcScore['errorAns'] + 1 })
            isNextNextImg()
        }
    }

    const handleLeftButton = () => {
        if (!isGame) {
            setTitleMassege(gmaeDialogTitle[0]);
            _.isEqual(exemplImgs[1], currentImg) && setDisabledGoBack(true)
            setCurrentImg(exemplImgs[exemplImgs.findIndex(x => x.id === currentImg.id) - 1])
        } else {
            currentImg.isYair ?
                setCalcScore({ ...calcScore, ['errorAns']: calcScore['errorAns'] + 1 }) :
                setCalcScore({ ...calcScore, ['correctAns']: calcScore['correctAns'] + 1 })
            isNextNextImg()
        }
    }

    const isNextNextImg = () => {
        _.isEqual(allImage[allImage.length - 1], currentImg) ?
            endGame() :
            setCurrentImg(allImage[allImage.findIndex(x => x.id === currentImg.id) + 1])
    }

    const startGame = () => {
        setIsGame(true)
        setCurrentImg(allImage[0])
    }

    const endGame = () => {
        calcScore.correctAns > calcScore.errorAns ? setTitleMassege(gmaeDialogTitle[3]) : setTitleMassege(gmaeDialogTitle[4])
        setCurrentImg(twinImg[0])
    }

    const rightButtom = isGame ? 'Yair' : (titleMassege ? 'start the game' : 'Continue')
    const leftButton = isGame ? 'Evytar' : 'Go back'

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
                        <Typography variant="div">{titleMassege}</Typography>
                        <IconButton onClick={handleCloseGame} >
                            <CloseOutlinedIcon />
                        </IconButton>
                    </Grid>
                </DialogTitle>
                <DialogContent className={classes.frame} >
                    <img className={classes.img} src={currentImg.src} alt={currentImg.id} />
                </DialogContent>
                <DialogActions >
                    <Grid container justify="space-around" alignItems="center">
                        <Button onClick={handleLeftButton} disabled={disabledGoBack}>{leftButton}</Button>
                        <Button onClick={handleRightButtom}> {rightButtom} </Button>
                    </Grid>

                </DialogActions>

            </Dialog>
        </div>
    );
}

export default GameLogic;