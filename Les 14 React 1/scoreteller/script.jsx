const Header = (props) => {
    return (
        <header id="test">
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    )
};

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">{props.name}</span>
            <Counter score={props.score}/>
        </div>
    )
}

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment"> + </button>
        </div>
    )
}

const App = () => {
    return (
        <div className="scoreboard">
            <Header title="Scoreboard" totalPlayers={3}/>

            {/* Player list */}
            <Player name="Maurice" score={12}/>
            <Player name="Kees" score={25}/>
            <Player name="Piet" score={2}/>
        </div>
    )
}

ReactDOM.render (
    <App />,
    document.getElementById('root')
);