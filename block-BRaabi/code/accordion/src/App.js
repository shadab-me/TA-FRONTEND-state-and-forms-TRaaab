import logo from "./logo.svg";
import "./App.css";
import React from "react";
import questions from "./config/question.json";
import Accordion from "./components/Accordion";
class App extends React.Component {
  render() {
    return (
      <div className="card">
        {questions.map((question) => {
          return <Accordion question={question} />;
        })}
      </div>
    );
  }
}
function Question(props) {}

export default App;
