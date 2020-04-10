import React, { Component } from "react";
import "./Wizard.scss";
class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
            <input name="name" type="text" />
          </div>
          <div className="address">
            <span>Address</span> <br />
            <input name="address" type="text" />
          </div>
          <div className="inline">
            <div className="city">
              <span>City</span> <br />
              <input name="city" type="text" />
            </div>
            <div className="state">
              <span>State</span> <br />
              <input name="state" type="text" />
            </div>
            <div className="zip">
              <span>Zip</span> <br />
              <input name="zip" type="number" />
            </div>
          </div>
        </div>
        <button className="continue">Continue</button>
      </main>
    );
  }
}
export default Wizard;
