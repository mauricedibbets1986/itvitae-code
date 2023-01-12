import React from 'react';

import Counter from './Counter';

const Player = (props) => {
    return (
        <div className='player'>
            <span className="player-name">{props.name}</span>

            <Counter 
                score = {props.score}
                changeScore = {props.changeScore}
                index = {props.index}
            />
        </div>
    )
}

export default Player;