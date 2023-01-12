import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import Player from './Player';


class App extends React.Component {
  state = {
    players: [
      {
        name: "Maurice",
        score: 1,
        id: 1
      },
      {
        name: "Kees",
        score: 5,
        id: 2
      }
    ]
  };

  decrementScore() {
    console.log("hoi vanuit decrement score");
    
  }
  
  render() {
    return (
      <div className="scoreboard">
          <Header title="Scoreboard" totalPlayers={this.state.players.length}/>

          {/* Player list */}
          {this.state.players.map(player => 
              <Player
                name = {player.name}
                key = {player.id.toString()}
                score = {player.score}
              />
          )}
      </div>
    )
  };

}

export default App;