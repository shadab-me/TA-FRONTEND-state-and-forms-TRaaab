import React from "react";
import "./Accordion.css";

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }
  display = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };
  render() {
    let question = this.props.question;
    let state = this.props.state;
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
  }
}
export default Accordion;
