import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Counter from "./components/counter";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: 1,
    };
  }
  userInput = (count) => {
    this.setState({
      userInput: count,
    });
  };
  render() {
    return (
      <div>
        <div className="App">
          <button onClick={() => this.userInput(5)} className="increment">
            5
          </button>
          <button onClick={() => this.userInput(10)} className="decrement">
            10
          </button>
          <button onClick={() => this.userInput(15)} className="reset">
            15
          </button>
        </div>
        <Counter userInput={this.state.userInput} />;
      </div>
    );
  }
}

export default App;
