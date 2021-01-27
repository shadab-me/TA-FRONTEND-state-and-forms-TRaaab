import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  increment = (userInput = 1) => {
    this.setState({
      counter: this.state.counter + userInput,
    });
  };
  decrement = (userInput = 1) => {
    this.setState({
      counter: this.state.counter - userInput,
    });
  };
  reset = () => {
    this.setState({
      counter: 0,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.counter}</h1>
        <button
          onClick={() => this.increment(this.props.userInput)}
          className="increment"
        >
          Increment
        </button>
        <button
          onClick={() => this.decrement(this.props.userInput)}
          className="decrement"
        >
          Decrement
        </button>
        <button onClick={this.reset} className="reset">
          Reset
        </button>
      </div>
    );
  }
}

export default Counter;
