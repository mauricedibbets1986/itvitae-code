import React from 'react';

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

  export default Counter;