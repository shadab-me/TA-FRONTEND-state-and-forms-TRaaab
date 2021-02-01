import React from "react";
import "./Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      default: false,
      success: false,
      error: false,
      warning: false,
      info: false,
    };
  }

  changeActive = (btn) => {
    this.setState({
      [btn]: !this.state[btn],
    });
  };

  checkStatus = (btn) => {
    return (
      <div className="w-180px bg-blue-200 m-2 p-3 flex justify-between">
        <p>{btn}</p>
        <i
          className="far fa-times cursor-pointer"
          onClick={() => this.changeActive(btn)}
        >
          X
        </i>
      </div>
    );
  };

  render() {
    return (
      <div className="container">
        <nav>
          <div className="flex">
            {["default", "success", "error", "warning", "info"].map((btn) => (
              <button
                className={
                  this.state[btn]
                    ? "bg-green-500 active:bg-green-700 m-2 text-white outline-none p-2"
                    : "bg-blue-600 m-2 p-2 text-white-300 text-white"
                }
                key={btn}
                onClick={() => this.changeActive(btn)}
              >
                {this.state[btn]
                  ? `HIDE ${btn.toUpperCase()}`
                  : `SHOW ${btn.toUpperCase()}`}
              </button>
            ))}
          </div>
        </nav>
        <main>
          {["default", "success", "error", "warning", "info"]
            .filter((btn) => this.state[btn])
            .map((message) => this.checkStatus(message))}
        </main>
      </div>
    );
  }
}

export default Header;
