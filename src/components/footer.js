import React, { Component } from "react";
import logo from "../images/logo.png";

class Footer extends Component {
  render() {
    return (
      <footer>
        <img height="70px" src={logo} />
        <p>
          Support <br /> mvsolutions18@gmail.com
        </p>
        <ul>
          <li>
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
