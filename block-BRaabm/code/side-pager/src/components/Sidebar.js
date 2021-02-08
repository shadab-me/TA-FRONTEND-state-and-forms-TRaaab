import "./Sidebar.css";
import React from "react";
import Main from "../components/Main";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  changeVisibility = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };
  render() {
    return (
      <div className="container flex">
        <header>
          <nav>
            <ul>
              <li>Home</li>
              <hr />
              <li>About</li>
              <hr />

              <li>Contact</li>
              <hr />

              <li className="last" onClick={this.changeVisibility}>
                {this.state.visible ? "Hide" : "Show"}
              </li>
            </ul>
          </nav>
        </header>
        <main>{this.state.visible ? <Main /> : ""}</main>
      </div>
    );
  }
}

export default Sidebar;
