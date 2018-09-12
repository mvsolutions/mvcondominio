import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <h3>Copyright - MV Solutions.</h3>
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
