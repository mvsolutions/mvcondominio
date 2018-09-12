import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li className="logo">
            Mv
            <span>Solutions</span>
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
