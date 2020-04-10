import React, { Component } from "react";
import House from "../House/House";
import "./Dashboard.scss";
import Axios from "axios";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
    };
    this.deleteProperty = this.deleteProperty.bind(this);
  }
  deleteProperty(id) {
    if (id) {
      Axios.delete("/api/property/" + id)
        .then((res) => {
          this.setState({ properties: this.formatProperties(res.data) });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }
  formatProperties(data = []) {
    let display = data.map((property) => {
      return <House {...property} deleteProperty={this.deleteProperty} />;
    });
    return display;
  }
  getAllProperties() {
    Axios.get("/api/properties")
      .then((res) => {
        if (res.data.length) {
          this.setState({
            properties: this.formatProperties(res.data),
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  componentDidMount() {
    this.getAllProperties();
  }
  render() {
    return (
      <main className="Dashboard">
        <div className="header-container">
          <span>Dashboard</span>
          <button>Add new Property</button>
        </div>
        <h6>Home Listings</h6>
        {this.state.properties}
      </main>
    );
  }
}
export default Dashboard;
