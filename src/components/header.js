import React, { Component } from "react";
import Nav from "./nav";

class Header extends Component {
  render() {
    return (
      <header>
        <Nav />
        <div className="head">
          <h1>We Design, We Create</h1>
        </div>
      </header>
    );
  }
}

export default Header;
