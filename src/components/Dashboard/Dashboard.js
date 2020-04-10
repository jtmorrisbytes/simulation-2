import React, { Component } from "react";
import House from "../House/House";
import "./Dashboard.scss";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main className="Dashboard">
        <div className="header-container">
          <span>Dashboard</span>
          <button>Add new Property</button>
        </div>
        <h6>Home Listings</h6>
        <House />
      </main>
    );
  }
}
export default Dashboard;
