import React from 'react';

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <span className='stats'>Player: {props.totalPlayers}</span>
        </header>
    )
};

export default Header;