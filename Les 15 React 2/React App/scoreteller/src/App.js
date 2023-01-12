import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import Player from './Player';


class App extends React.Component {
  state = {
    players: [
      {
        name: "Maurice",
        score: 0,
        id: 1
      },
      {
        name: "Kees",
        score: 0,
        id: 2
      }
    ]
  }
  
  render() {
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

}

export default App;