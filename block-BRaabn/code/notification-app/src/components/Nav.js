import React from "react";
import "./Nav.css";

class Nav extends React.Component {
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
      <div className="navigation">
        <button onClick={this.changeVisibility}>Nav</button>
        <div
          className={this.state.isDisplay ? "topnav container" : "topnav-hide"}
        >
          <div className="nav flex">
            <a className="active" href="#home">
              Home
            </a>
            <a href="##">News</a>
            <a href="##">Contact</a>
            <a href="##">About</a>
          </div>
          <div className="close-btn">
            <i className="close" onClick={this.changeVisibility}>
              {this.state.isDisplay ? "X" : "Y"}
            </i>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
