import React, { useState, forwardRef, useEffect } from 'react';
import {
    Slide, createStyles, makeStyles, Typography, IconButton,
    DialogTitle, Dialog, Button, DialogContent, DialogActions, Grid, Chip
} from '@material-ui/core';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { onStyleButton } from '../../sherd/gameStyle'
import { allImage, exemplImgs, twinImg } from './images';
import { LazyLoadImage } from 'react-lazy-load-image-component';



const _ = require('lodash');


const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="left" easing="20" timeout='30s' ref={ref} {...props} />;
});

const useStyles = makeStyles(() => createStyles({
    img: {
        width: '100%',
        height: '100%',
    },
    buttons: {
        borderRadius: '2'
    },
    frame: {

    }
}), { flip: false })

const GameLogic = (props) => {
    const { handleIsDialog } = props
    const classes = { ...useStyles(), ...onStyleButton() }

    const handleCloseGame = () => handleIsDialog(false)

    const gmaeDialogTitle = ['Take a good look he is Yair', 'Start playing!', 'Who is this guy?', 'You won! Well done!', 'Yair and Eviatar are not so similar. Go for a vision test']
    const [titleMassege, setTitleMassege] = useState(gmaeDialogTitle[0])

    const rightButtonTitle = ['Continue', 'Yair']
    const [rightButton, setRigetButton] = useState(rightButtonTitle[0])

    const leftButtonTitle = ['Go back', 'Evytar']
    const [leftButton, setLeftButton] = useState(leftButtonTitle[0])


    const [isGame, setIsGame] = useState(false)
    const [disabledButton, setDisabledButton] = useState({ leftButton: true, righetButton: false })
    const [calcScore, setCalcScore] = useState({ errorAns: 0, correctAns: 0 })
    const [currentImg, setCurrentImg] = useState(exemplImgs[0])

    const handleRightButton = () => {

        if (!isGame) {
            setDisabledButton({ ...disabledButton, ['leftButton']: false })
            _.isEqual(exemplImgs[exemplImgs.length - 2], currentImg) ? setTitleMassege(gmaeDialogTitle[1]) :
                setTitleMassege(gmaeDialogTitle[2]);
            _.isEqual(exemplImgs[exemplImgs.length - 1], currentImg) ? startGame() :
                setCurrentImg(exemplImgs[exemplImgs.findIndex(x => x.id === currentImg.id) + 1])
        } else {
            currentImg.isYair ?
                setCalcScore({ ...calcScore, ['correctAns']: calcScore['correctAns'] + 1 }) :
                setCalcScore({ ...calcScore, ['errorAns']: calcScore['errorAns'] + 1 })
            isNextImg()
        }
    }

    const handleLeftButton = () => {
        if (!isGame) {
            setTitleMassege(gmaeDialogTitle[0]);
            _.isEqual(exemplImgs[1], currentImg) && setDisabledButton({ ...disabledButton, ['leftButton']: true })
            setCurrentImg(exemplImgs[exemplImgs.findIndex(x => x.id === currentImg.id) - 1])
        } else {
            currentImg.isYair ?
                setCalcScore({ ...calcScore, ['errorAns']: calcScore['errorAns'] + 1 }) :
                setCalcScore({ ...calcScore, ['correctAns']: calcScore['correctAns'] + 1 })
            isNextImg()
        }
    }

    const startGame = () => {
        setIsGame(true)
        setCurrentImg(allImage[0])
    }

    const isNextImg = () => {
        _.isEqual(allImage[allImage.length - 1], currentImg) ?
            endGame() :
            setCurrentImg(allImage[allImage.findIndex(x => x.id === currentImg.id) + 1])
    }

    const endGame = () => {
        calcScore.correctAns > calcScore.errorAns ? setTitleMassege(gmaeDialogTitle[3]) : setTitleMassege(gmaeDialogTitle[4])
        setCurrentImg(twinImg[0])
        setRigetButton(`${calcScore.correctAns} correct answers`)
        setLeftButton(`${calcScore.errorAns} wrong answers`)
        setDisabledButton({ ...disabledButton, ['leftButton']: true, ['righetButton']: true })
    }


    useEffect(() => {
        if (isGame) {
            setRigetButton(rightButtonTitle[1])
            setLeftButton(leftButtonTitle[1])
        }
    }, [isGame])

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
                    <LazyLoadImage className={classes.img} src={currentImg.src} alt={currentImg.id} effect="blur" />
                </DialogContent>
                <DialogActions >
                    <Grid container justify="space-around" alignItems="center">
                        <Button className={classes.leftButton} onClick={handleLeftButton} disabled={disabledButton.leftButton}>{leftButton}</Button>
                        <Button className={classes.righetButton} onClick={handleRightButton} disabled={disabledButton.righetButton}> {rightButton} </Button>
                    </Grid>

                </DialogActions >

            </Dialog>
        </div>
    );
}

export default GameLogic;