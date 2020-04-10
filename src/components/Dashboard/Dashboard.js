import React, { Component } from "react";
import House from "../House/House";
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
          <button></button>
        </div>
        <House />
      </main>
    );
  }
}
export default Dashboard;
