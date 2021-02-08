import logo from "./logo.svg";
import "./App.css";
import houses from "./config/data.json";
import Houses from "./components/Houses";
import React from "react";
import People from "./components/People";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Houses />;
  }
}

export default App;
