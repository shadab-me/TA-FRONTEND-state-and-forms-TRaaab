import React from "react";
import data from "../config/data.json";
import "./People.css";
import Match from "../components/Match";

const peoples = data.reduce((acc, house) => {
  house.people.forEach((obj) => {
    acc.push(obj.name);
  });
  return acc;
}, []);

class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPeople: "",
    };
  }

  userSelect = (name) => {
    this.setState({
      selectedPeople: name,
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="peoples-heading"></h1>
        <div className="peoples">
          <h1>All People</h1>
          {peoples.map((name) => {
            return (
              <div className="people">
                <li
                  onClick={() => {
                    this.userSelect(name);
                  }}
                >
                  {name}
                </li>
              </div>
            );
          })}
        </div>
        <Match
          userSelected={this.state.selectedPeople}
          houseSelected={this.props.selectedHouse}
        />
      </div>
    );
  }
}

export default People;
