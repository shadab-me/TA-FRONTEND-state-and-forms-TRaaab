import React from "react";
import Card from "./Card";
class Tester extends React.Component {
  constructor(props) {
    super();
    this.state = {
      font: "",
      size: "20",
    };
  }

  fontChange = (event) => {
    event.preventDefault();
    this.setState({
      font: event.target.value,
    });
  };

  sizeChange = (event) => {
    this.setState({
      size: event.target.value,
    });
  };

  render() {
    return (
      <section className="font-section">
        <h1>Font Tester</h1>
        <div className="container">
          <input
            value={this.state.font}
            onChange={this.fontChange}
            type="text"
            placeholder="Type Something"
          ></input>
          <span>{this.state.size}px</span>{" "}
          <input
            value={this.state.size}
            onChange={this.sizeChange}
            type="range"
            min="10"
            max="100"
            step="1"
          ></input>
          <Card font={this.state.font} size={this.state.size} />
        </div>
      </section>
    );
  }
}

export default Tester;
