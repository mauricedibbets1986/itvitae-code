const players = [
    {
        name: "Maurice",
        score: 200,
        id: 1
    },
    {
        name: "Kees",
        score: 250,
        id: 2
    },
    {
        name: "Piet",
        score: 100,
        id: 3
    }
];


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
            <Counter />
        </div>
    )
}

// const Counter = (props) => {
//     return (
//         <div className="counter">
//             <button className="counter-action decrement"> - </button>
//             <span className="counter-score">{props.score}</span>
//             <button className="counter-action increment"> + </button>
//         </div>
//     )
// }

class Counter extends React.Component {
    // constructor(props) {
    //     super()
    //     this.state = {
    //         score: 0
    //     }
    // }

    state = {
        score: 0
    };

    render() {
        return (
            <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{this.state.score}</span>
            <button className="counter-action increment"> + </button>
        </div>
        )
    };
}

const App = () => {
    return (
        <div className="scoreboard">
            <Header title="Scoreboard" totalPlayers={players.length}/>

            {/* Player list */}
            {players.map(player => 
                <Player
                name={player.name}
                key ={player.id.toString()}
                />
            )}
        </div>
    )
}

ReactDOM.render (
    <App />,
    document.getElementById('root')
);