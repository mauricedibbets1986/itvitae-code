import React from 'react';

class Counter extends React.Component {
    // constructor(props) {
    //     super()
    //     this.state = {
    //         score: 0
    //     }
    // }
  
    // state = {
    //     score: 0
    // };
  
    render() {
        return (
            <div className="counter">
            <button className="counter-action decrement" onClick={this.props.decrementScore.bind(this)}> - </button>
            <span className="counter-score">{this.props.score}</span>
            <button className="counter-action increment"> + </button>
        </div>
        )
    };
  }

  export default Counter;