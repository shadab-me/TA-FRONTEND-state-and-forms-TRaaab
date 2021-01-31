import React from "react";
import "./Main.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplay: true,
    };
  }

  changeVisibility = () => {
    this.setState({
      isDisplay: !this.state.isDisplay,
    });
  };
  render() {
    return (
      <div className="conainer">
        <button onClick={this.changeVisibility}>Modal</button>
        <div className={this.state.isDisplay ? "display" : "notdisplay"}>
          <i className="close" onClick={this.changeVisibility}>
            {this.state.isDisplay ? "X" : "Y"}
          </i>{" "}
        </div>
      </div>
    );
  }
}

export default Main;
