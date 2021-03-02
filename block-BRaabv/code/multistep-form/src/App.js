import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./components/Header";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      firstName: "",
      lastName: "",
      birth: "",
      email: "",
      address: "",
      message: "",
    };
  }

  nextStep = () => {
    if (this.state.step < 3) {
      this.setState({
        step: this.state.step + 1,
      });
    }
  };

  preStep = () => {
    if (this.state.step > 1) {
      this.setState({
        step: this.state.step - 1,
      });
    }
  };
  nextButton = () => {
    if (this.state.step < 3) {
      return (
        <button className="next-btn" onClick={this.nextStep}>
          Next
        </button>
      );
    }
  };

  preButton = () => {
    if (this.state.step > 1) {
      return (
        <button className="pre-btn" onClick={this.preStep}>
          Pre
        </button>
      );
    }
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    console.log(name, value);
    this.setState({
      [name]: value,
    });
  };

  onSubmit = () => {
    let result = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      birth: this.state.birth,
      email: this.state.email,
    };
    console.log(result);
  };

  render() {
    return (
      <div className="main">
        <Step1
          step={this.state.step}
          next={this.nextButton}
          pre={this.preButton}
          change={this.handleChange}
          state={this.state}
        />
        <Step2
          step={this.state.step}
          next={this.nextButton}
          pre={this.preButton}
          state={this.state}
        />
        <Step3
          step={this.state.step}
          next={this.nextButton}
          pre={this.preButton}
          submit={this.onSubmit}
          state={this.state}
        />
      </div>
    );
  }
}

function Step1(props) {
  if (props.step !== 1) {
    return null;
  }
  if (props.step == 1) {
    return (
      <div className="container flex">
        <div className="form-section flex">
          <div className="hero-img">
            <img src="/img/one.jpg"></img>
          </div>
          <div className="form-container">
            <div className="header">
              <Header step={props.step} />
              <p className="step">Step{props.step}/3</p>
              <h2>Sing UP</h2>
              <hr></hr>
            </div>
            <form>
              <div className="personal-details flex justify-between flex-wrap">
                <div className="fistname-section flex flex-col">
                  <label for="firstName">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={props.state.firstName}
                    placeholder="Enter Your First Name *"
                    onChange={props.change}
                    required
                  ></input>
                </div>
                <div className="lastname-section flex flex-col">
                  <label for="lastName">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={props.state.lastName}
                    placeholder="Enter Your Last"
                  ></input>
                </div>
                <div className="date-section flex flex-col">
                  <label for="date">Date</label>
                  <input type="date" name="date"></input>
                </div>
                <div className="email-section flex flex-col">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={props.state.email}
                    placeholder="Enter Your Email"
                    required
                  ></input>
                </div>

                <div className="address flex flex-col">
                  <label for="address">Address</label>
                  <input
                    type="address"
                    placeholder="Your Address"
                    required
                    value={props.state.address}
                    name="address"
                  ></input>
                </div>
              </div>
            </form>
            <div className="btns">
              {props.pre()}
              {props.next()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function Step2(props) {
  if (props.step !== 2) {
    return null;
  }
  if (props.step == 2) {
    return (
      <div className="container flex">
        <div className="form-section flex justify-flex">
          <div className="hero-img">
            <img src="/img/one.jpg"></img>
          </div>
          <div className="form-container">
            <Header step={props.step} />
            <hr></hr>
            <p className="step">Step {props.step}/3</p>
            <h2>Message</h2>

            <form>
              <textarea
                name="message"
                rows="10"
                cols="30"
                type="textarea"
                required
              >
                Write... *
              </textarea>
            </form>
            <div className="btns flex justify-between">
              {props.pre()}
              {props.next()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function Step3(props) {
  if (props.step !== 3) {
    return null;
  }
  if (props.step == 3) {
    return (
      <div className="container flex">
        <div className="form-section flex justify-content">
          <div className="hero-img">
            <img src="/img/one.jpg"></img>
          </div>
          <div className="form-container">
            <Header step={props.step} />
            <hr></hr>
            <h2>Checkbox</h2>
            <p className="step">Step{props.step}/3</p>
            <form>
              <div className="checkbox-flex">
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  onChange={props.handleChange}
                />
                <label htmlFor="male">
                  <img
                    src="https://github.com/sonu-kumar2001/TA-FRONTEND-state-and-forms-TRaaab/blob/block-BRaabv/block-BRaabv/code/multi-step/public/images/male.jpg"
                    alt="male"
                  />
                </label>
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  onChange={props.handleChange}
                />
                <label htmlFor="female">
                  <img
                    src="https://github.com/sonu-kumar2001/TA-FRONTEND-state-and-forms-TRaaab/blob/block-BRaabv/block-BRaabv/code/multi-step/public/images/female.jpg"
                    alt="female"
                  />
                </label>
              </div>
              <div className="flex flex-item-center flex-justify">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="vehicle1"> I have a bike</label>
                <br></br>
                <input
                  type="checkbox"
                  id="vehicle2"
                  name="vehicle2"
                  value="Car"
                />
                <label for="vehicle2"> I have a car</label>
                <br></br>
              </div>
            </form>
            <div className="btns flex-justify-between">
              {props.pre()}
              <button
                type="submit"
                className="next-btn"
                onClick={() => props.submit()}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
