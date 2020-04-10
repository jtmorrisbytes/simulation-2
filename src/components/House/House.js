import React, { Component } from "react";
import deleteButton from "../../images/delete_button.png";
import "./House.scss";

class House extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="House">
        <span className="delete">
          <img src={deleteButton} />
        </span>
        <div className="name">PropertyName: {this.props.propertyName}</div>
        <div className="address">Address: {this.props.address}</div>
        <div className="city">City: {this.props.city}</div>
        <div className="state">State: {this.props.state}</div>
        <div className="zip">Zip: {this.props.zip}</div>
      </div>
    );
  }
}
export default House;
