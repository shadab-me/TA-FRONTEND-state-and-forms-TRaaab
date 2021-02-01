import React from "react";

class Forms extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <>
        <section className=" my-5 ">
          <h2 className="text-2xl text-center font-bold">
            Controlled Components
          </h2>
          <div className="flex flex-row items-center my-10   h-96">
            <ShippingAddForm />
          </div>
        </section>
      </>
    );
  }
}

class ShippingAddForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      address: "",
      postalCode: "",
      city: "",
      country: "",
    };
  }

  handleInput = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case name:
        this.setState({
          [name]: value,
        });
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <>
        <section className="flex-1 border-4 shadow-2xl border-red-300 mx-5 py-7 px-2">
          <h3 className="text-green-400 text-4xl py-2">Shipping Address</h3>
          <form>
            <div className="flex flex-col">
              <label
                className="text-1xl font-bold py-1"
                htmlFor="address"
                id="address-label"
              >
                Address
              </label>
              <input
                onChange={this.handleInput}
                className="border-2 border-gray-300 py-2"
                id="address"
                type="text"
                name="address"
                placeholder="e.g Rampur Himachal Pradesh"
              ></input>
            </div>
            <div className="flex flex-col">
              <label
                className="text-1xl font-bold py-1"
                htmlFor="zipCode"
                id="address-label"
              >
                ZIP/Postal Code
              </label>
              <input
                onChange={this.handleInput}
                className="border-2 border-gray-300 py-2"
                id="zipCode"
                type="text"
                name="postalCode"
                placeholder="e.g 201002
                "
              ></input>
            </div>
            <div className="flex flex-col">
              <label
                className="text-1xl font-bold py-1"
                htmlFor="city"
                id="address-label"
              >
                City
              </label>
              <input
                onChange={this.handleInput}
                className="border-2 border-gray-300 py-2"
                id="city"
                type="text"
                name="city"
                placeholder="e.g Rampur"
              ></input>
            </div>
            <div className="flex flex-col">
              <label
                className="text-1xl font-bold py-1"
                htmlFor="country"
                id="address-label"
              >
                Country
              </label>
              <input
                onChange={this.handleInput}
                className="border-2 border-gray-300 py-2"
                value={this.state.country}
                id="country"
                type="text"
                name="country"
                placeholder="e.g India"
              ></input>
            </div>
          </form>
        </section>
        <BillingAddForm shippingAddress={this.state} />
      </>
    );
  }
}

class BillingAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      postalCode: "",
      city: "",
      country: "",
      isDisplay: false,
    };
  }

  handleCheck = (event) => {
    if (event.target.checked) {
      this.setState({
        address: this.props.shippingAddress.address,
        postalCode: this.props.shippingAddress.postalCode,
        city: this.props.shippingAddress.city,
        country: this.props.shippingAddress.country,
        isDisplay: !this.state.isDisplay,
      });
    } else {
      this.setState({
        address: this.state.address,
        postalCode: this.state.postalCode,
        city: this.state.city,
        country: this.state.country,
      });
    }
  };

  render() {
    return (
      <section className="flex-1 border-4 border-red-300 shadow-2xl mx-5 py-5 px-2">
        <h3 className="text-4xl text-green-400  ">Billing Address</h3>
        <form>
          <div className="flex flex-row items-center py-1">
            <input
              onClick={this.handleCheck}
              className="text mx-2 border-2 border-gray-300 py-2 "
              type="checkbox"
            ></input>
            <label className="text-1xl font-bold py-1">
              Same as the Shipping Address
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className="text-1xl font-bold py-1 "
              htmlFor="address"
              id="address-label"
            >
              Address
            </label>
            <input
              readOnly
              value={
                this.state.isDisplay
                  ? this.props.shippingAddress.address
                  : this.state.address
              }
              className="border-2 border-gray-300 py-2"
              id="address"
              type="text"
              name="text"
              placeholder="e.g Dhar"
            ></input>
          </div>
          <div className="flex flex-col">
            <label
              className="text-1xl font-bold py-1"
              htmlFor="address"
              id="address-label"
            >
              ZIP/Postal Code
            </label>
            <input
              readOnly
              value={
                this.state.isDisplay
                  ? this.props.shippingAddress.postalCode
                  : this.state.postalCode
              }
              className="border-2 border-gray-300 py-2"
              id="address"
              type="text"
              name="text"
              placeholder="e.g 176059"
            ></input>
          </div>
          <div className="flex flex-col">
            <label
              className="text-1xl font-bold py-1"
              htmlFor="address"
              id="address-label"
            >
              City
            </label>
            <input
              readOnly
              value={
                this.state.isDisplay
                  ? this.props.shippingAddress.city
                  : this.state.city
              }
              className="border-2 border-gray-300 py-2"
              id="address"
              type="text"
              name="text"
              placeholder="e.g Rampur"
            ></input>
          </div>
          <div className="flex flex-col">
            <label
              className="text-1xl font-bold py-1"
              htmlFor="address"
              id="address-label"
            >
              Country
            </label>
            <input
              readOnly
              value={
                this.state.isDisplay
                  ? this.props.shippingAddress.country
                  : this.state.country
              }
              className="border-2 border-gray-300 py-2"
              id="address"
              type="text"
              name="text"
              placeholder="e.g India"
            ></input>
          </div>
        </form>
      </section>
    );
  }
}

export default Forms;
