import React, { Component } from "react";
import logo from "../images/cond.png";

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li className="logo">
            <img height="25px" src={logo} />
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Sobre o App</a>
          </li>
          <li>
            <a href="#">Sobre Nós</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
