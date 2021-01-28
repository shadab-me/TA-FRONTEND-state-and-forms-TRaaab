import logo from "./logo.svg";
import "./App.css";
import React from "react";
import questions from "./config/question.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }
  display = () => {
    this.setState({
      isActive: true,
    });
  };
  render() {
    return (
      <div className="card">
        {questions.map((question) => {
          return (
            <div className="card" key={question}>
              <button className="accordion" onClick={this.display}>
                {question.question}
              </button>
              <p className={this.state.isActive ? "active" : "panel"}>
                {question.answer}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default App;
