import React from 'react'

import './App.css';

import Player from './Components/Player';
import Addbutton from './Components/Addbutton';

class App extends React.Component {
  // state met 0 of een aantal players
  state = {
    players: [
      {
        name: "Maurice",
        age: 36
      },
    ]
  };


  handleAddPlayer = (name, age) => {
    // maken object toe te voegen players
    const addPlayer = {name, age};

    // toevoegen player aan state array players met concat (kan ook anders)
    this.setState(prevState => ({
      players: this.state.players.concat(addPlayer)
    }))
  }

  render() {
    return (
      <>

        {/* map over players en maken per player component */}
        {this.state.players.map((player, index) => (
          <Player 
            key = {index}
            name = {player.name}
            age = {player.age}
          />
        ))}

        {/* maken add Button en input fields meegeven methode handleAddPlayer */}
        {<Addbutton 
          addPlayerFunction = {this.handleAddPlayer}
        />}
      </>
    )
  }
}

export default App;
