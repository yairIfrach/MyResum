import React, { useState, forwardRef, useEffect } from 'react';
import {
    Slide, createStyles, makeStyles, Typography, IconButton,
    DialogTitle, Dialog, Button, DialogContent, DialogActions, Grid
} from '@material-ui/core';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { ImageGroup, Image } from 'react-fullscreen-image'
import { allImage, evytarImgs, exemplImgs, yairImgs } from './images';


const _ = require('lodash');


const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="left" easing="20" timeout='30s' ref={ref} {...props} />;
});

const useStyles = makeStyles(() => createStyles({
    img: {
        width: '100%',
        height: '100%',
    } ,
    frame :{
        
    }
}))

const GameLogic = (props) => {
    const { handleIsDialog } = props
    const classes = useStyles()

    const handleCloseGame = () => handleIsDialog(false)

    const [isGame, setIsGame] = useState(false)
    const [titleMassege, setTitleMassege] = useState(false)
    const [disabledGoBack, setDisabledGoBack] = useState(true)
    const [calcScore, setCalcScore] = useState({ errorAns: 0, correctAns: 0 })
    const [currentExemplImg, setCurrentExemplImgs] = useState(exemplImgs[0])

    const handleContinue = () => {
        if (!isGame) {
            setDisabledGoBack(false)
            _.isEqual(exemplImgs[exemplImgs.length - 2], currentExemplImg) ? setTitleMassege(true) : setTitleMassege(false);
            if (!_.isEqual(exemplImgs[exemplImgs.length - 1], currentExemplImg)) {
                setCurrentExemplImgs(exemplImgs[exemplImgs.findIndex(x => x.id === currentExemplImg.id) + 1])
            } else {
                setIsGame(true)
                setCurrentExemplImgs(allImage[0])
            }
        } else {
            currentExemplImg.isYair ?
                setCalcScore({
                    ...calcScore,
                    ['correctAns']: calcScore['correctAns'] + 1
                }) :
                setCalcScore({
                    ...calcScore,
                    ['errorAns']: calcScore['errorAns'] + 1
                })

            if (!_.isEqual(allImage[allImage.length - 1], currentExemplImg)) {

                setCurrentExemplImgs(allImage[allImage.findIndex(x => x.id === currentExemplImg.id) + 1])

            } else {
                console.log("end")
            }
        }

    }

    console.log(allImage)

    const handleGoBack = () => {
        if (!isGame) {

            setTitleMassege(false);
            if (_.isEqual(exemplImgs[1], currentExemplImg)) {
                setDisabledGoBack(true)
            }
            setCurrentExemplImgs(exemplImgs[exemplImgs.findIndex(x => x.id === currentExemplImg.id) - 1])
        } else {
            currentExemplImg.isYair ?
                setCalcScore({
                    ...calcScore,
                    ['errorAns']: calcScore['errorAns'] + 1
                }) :
                setCalcScore({
                    ...calcScore,
                    ['correctAns']: calcScore['correctAns'] + 1
                })
            if (!_.isEqual(allImage[allImage.length - 1], currentExemplImg)) {


                setCurrentExemplImgs(allImage[allImage.findIndex(x => x.id === currentExemplImg.id) + 1])
            } else {
                console.log("end")
            }
        }

    }

    console.log(calcScore)

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
                        <Typography variant="div">{isGame ? 'Who is this guy?' : (titleMassege ? `Start playing!` : `Take a good look he's Yair`)}</Typography>
                        <IconButton onClick={handleCloseGame} >
                            <CloseOutlinedIcon />
                        </IconButton>
                    </Grid>
                </DialogTitle>
                <DialogContent className={classes.frame} >
                    <img className={classes.img} src={currentExemplImg.src} alt={currentExemplImg.id} />
                </DialogContent>
                <DialogActions >
                    <Grid container justify="space-around" alignItems="center">
                        <Button onClick={handleGoBack} disabled={disabledGoBack}>{isGame ? 'Evytar' : 'Go back'}</Button>
                        <Button onClick={handleContinue}> {isGame ? 'Yair' : (titleMassege ? 'start the game' : 'Continue')} </Button>
                    </Grid>

                </DialogActions>

            </Dialog>
        </div>
    );
}

export default GameLogic;