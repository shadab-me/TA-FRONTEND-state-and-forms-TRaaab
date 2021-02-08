import "./App.css";
import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: "",
    };
  }
  changeHandler(path) {
    this.setState({
      imageURL: path,
    });
  }

  render() {
    return (
      <section className="container">
        <section className="buttons flex">
          <button onClick={() => this.changeHandler("/assets/basketball.jpg")}>
            Baseket Ball
          </button>
          <button onClick={() => this.changeHandler("/assets/pubg.jpeg")}>
            PubG
          </button>
          <button onClick={() => this.changeHandler("/assets/tiger.jpg")}>
            Tiger
          </button>
          <button onClick={() => this.changeHandler("/assets/phone.jpg")}>
            Phone
          </button>
          <button onClick={() => this.changeHandler("/assets/laptop.jpg")}>
            Laptop
          </button>
          <button onClick={() => this.changeHandler("/assets/cricket.jpeg")}>
            Cricket
          </button>
        </section>
        <section className="img-container">
          <img className="" src={this.state.imageURL} alt="button"></img>
        </section>
      </section>
    );
  }
}

export default App;
