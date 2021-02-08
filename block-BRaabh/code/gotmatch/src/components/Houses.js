import React from "react";
import data from "../config/data.json";
import "./Houses.css";
import People from "./People";

class Houses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedHouse: "",
    };
  }

  houseSelect = (house) => {
    this.setState({
      selectedHouse: house,
    });
  };
  render() {
    return (
      <div className="container">
        <h1 className="houses-heading">All Houses</h1>
        <div className="houses">
          {data.map((house) => {
            return (
              <div className="house">
                <li
                  onClick={() => {
                    this.houseSelect(house.name);
                  }}
                >
                  {house.name}
                </li>
              </div>
            );
          })}
        </div>
        <People selectedHouse={this.state.selectedHouse} />
      </div>
    );
  }
}

export default Houses;
