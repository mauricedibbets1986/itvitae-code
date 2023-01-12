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
  
    // decrementScore() {
    //     console.log("hoi vanuit decrement score");
    //     this.setState(
    //       {
    //         score: this.state.score -1
    //       }
    //     )
    // };

    // incrementScore = () => {
    //     console.log("hoi vanuit increment score");
    //     this.setState(
    //         {
    //             score: this.state.score +1
    //         }
    //     )
    // };

    render() {
        return (
            <div className="counter">
            <button className="counter-action decrement" onClick={() => this.props.changeScore(this.props.index, -1)}> - </button>
            <span className="counter-score">{this.props.score}</span>
            <button className="counter-action increment" onClick={() => this.props.changeScore(this.props.index, 1)}> + </button>
        </div>
        )
    };
  }

  export default Counter;