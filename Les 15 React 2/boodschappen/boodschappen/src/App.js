import React from 'react';
import ReactDOM from 'react-dom';

import logo from './logo.svg';
import './App.css';

import Header from './Header';
import Add from './Add';
import Item from './Item';

class App extends React.Component {

  state = {
    items: []
  }

  addItem = () => {
    this.setState(prevState => ({
      items: [...prevState.items, "new value"]
    }))
  }

  render() {
    return (
      <div>
          <Header title="Kopen:" totalPlayers={this.state.items.length}/>
          <div>
            <Add />
            <div>
              <Item name = "test"/>
            </div>
          </div>
      </div>
    );
  }


}

export default App;
