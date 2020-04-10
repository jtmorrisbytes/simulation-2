import React, { Component } from "react";
import "./Wizard.scss";
class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(e) {
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <main className="Wizard">
        <div className="header-container">
          <h3>Add New listing</h3>
          <button className="cancel">cancel</button>
        </div>
        <div className="container">
          <div className="name">
            <span>Property Name</span> <br />
            <input
              value={this.state.name}
              onChange={this.handleInputChange}
              name="name"
              type="text"
            />
          </div>
          <div className="address">
            <span>Address</span> <br />
            <input
              value={this.state.address}
              onChange={this.handleInputChange}
              name="address"
              type="text"
            />
          </div>
          <div className="inline">
            <div className="city">
              <span>City</span> <br />
              <input
                value={this.state.city}
                onChange={this.handleInputChange}
                name="city"
                type="text"
              />
            </div>
            <div className="state">
              <span>State</span> <br />
              <input
                value={this.state.state}
                name="state"
                onChange={this.handleInputChange}
                type="text"
              />
            </div>
            <div className="zip">
              <span>Zip</span> <br />
              <input
                name="zip"
                value={this.state.zip}
                onChange={this.handleInputChange}
                type="tex "
              />
            </div>
          </div>
        </div>
        <button className="continue">Continue</button>
      </main>
    );
  }
}
export default Wizard;
