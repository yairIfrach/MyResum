import React, { useState } from 'react';
import GameLogic from './gameLogic';
import Intro from './intro';

const Game = (props) => {
    const { setOpenGame } = props
    const [isIntro, setIsIntro] = useState(true);

    const handleIsDialog = (event) => setOpenGame(event);
    const handleIsIntro = (event) => setIsIntro(event);

    return (
        <div>
            {isIntro ? <Intro handleIsIntro={handleIsIntro} handleIsDialog={handleIsDialog} />
                : <GameLogic handleIsDialog={handleIsDialog} />}
        </div>
    );
}

export default Game;