import React from 'react';
import ReactDOM from 'react-dom';

import logo from './logo.svg';
import './App.css';

import Header from './Header';
import Add from './Add';
import Item from './Item';

class App extends React.Component {

  state = {
    boodschappenlijst: []
  }

  addItem = () => {
    this.setState(prevState => ({
      items: [...prevState.items, "new value"]
    }))
  }

  removeItem = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    })
  }

  changeItem = (id) => {

  }

  componentDidMount() {
    fetch('http://localhost:3000/boodschappen.json')
      .then((response) => 
        response.json()
      )
      .then((data) => {
        console.log(data)
        this.setState({ items: data })
      })
      .catch((error) => {
        console.error(error);
      })
  }

  render() {
    return (
      <div>
        <Add addItem={this.addItem} />
        <div>
          {this.state.boodschappenlijst.map((bitem, index) =>
            <Item
              name={bitem.name}
              key={bitem.id.toString()}
              deleteItem={this.deleteItem}
              changeItem={this.changeItem}
              index={index}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
