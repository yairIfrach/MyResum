
import React, { useState } from 'react';
import { createStyles, makeStyles, Button } from '@material-ui/core';
import Game from '../game/game'


const useStyle = makeStyles(() => createStyles({
    header: {
        display: 'flow-root',
        backgroundColor: '#fdcb6e',
        textAlign: 'center',
        height: '150px',
        padding: '5%',
    },
    title: {
        color: 'white',
        fontSize: '50px',
        fontWeight: 'bold',
    }

    , mainTitleColored: {
        color: '#7B524C',
        fontWeight: 'bold',
    }

    , subTitle: {
        fontSize: '15px',
    }

    , borderStyle: {
        borderLeftStyle: 'solid',
        margin: '5px',
    }

    , arrowShape: {
        margin: '0 auto',
        width: '0',
        height: '0',
        borderLeft: '150px solid transparent',
        borderRight: '150px solid transparent',
        borderTop: '100px solid #fdcb6e',
    },
    buttonPlay: {
        textTransform: 'none',
        marginTop: '35px',
        borderRadius: '16px',
        fontSize: ' 100%',
        border: 'black',
        color: ' #d53763',
        backgroundColor: ' #ccefef',
        height: '60px',
        fontWeight: 'bold',
    }
}))

const Header = () => {

    const [openGame, setOpenGame] = useState(false);
    const handleClickOpenGame = () => setOpenGame(!openGame);

    const classes = useStyle()
    return (
        <div>
            <div className={classes.header}>
                <div className={classes.title}>
                    <span className={classes.borderStyle} />
                    <span className={classes.mainTitleColored}>Hello, I'm</span> Yair!
                </div>
                <div className={classes.subTitle}>
                    This is my  <span className={classes.mainTitleColored}>Curriculum Vitae</span>
                    <span className={classes.borderStyle} />
                </div>
                <Button className={classes.buttonPlay} variant='contained' onClick={handleClickOpenGame}>Find Yair</Button>
                {openGame && <Game setOpenGame={setOpenGame}/>}
            </div>
            <div className={classes.arrowShape} />
        </div>
    );
}

export default Header;
