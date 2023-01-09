const Header = () => {
    return (
        <header id="test">
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
        </header>
    )
};

const Player = () => {
    return (
        <div className="player">
            <span className="player-name">Maurice</span>
            <Counter />
        </div>
    )
}

const Counter = () => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">35</span>
            <button className="counter-action increment"> + </button>
        </div>
    )
}

const App = () => {
    return (
        <div className="scoreboard">
            <Header />

            {/* Player list */}
            <Player />
        </div>
    )
}

ReactDOM.render (
    <App />,
    document.getElementById('root')
);