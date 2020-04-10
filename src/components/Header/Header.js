import React, { Component } from "react";
import houserLogo from "../../images/houser_logo.png";
import "./Header.scss";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Header">
        <div className="container">
          <img src={houserLogo} alt="Houser logo" />
          Houser
        </div>
      </div>
    );
  }
}
export default Header;
