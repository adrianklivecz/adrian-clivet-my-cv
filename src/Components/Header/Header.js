import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import { faCopyright } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";

export class Header extends Component {
  render() {
    const path = this.props.location.pathname;

    return (
      <div className="header-container">
        <div className="top">
          <h2 className="first-name">Adrian Cliveț</h2>
          <h2 className="last-name">
            <span> </span>
          </h2>
        </div>
        <div className="buttons-container">
          <ul>
            <li className={path === "/" ? "selected" : ""}>
              <Link to="/">Home</Link>
            </li>
            <li className={path === "/experience" ? "selected" : ""}>
              <Link to="/experience">Experience</Link>
            </li>
            <li className={path === "/education" ? "selected" : ""}>
              <Link to="/education">Education</Link>
            </li>
            <li className={path === "/about-me" ? "selected" : ""}>
              <Link to="/about-me">About Me</Link>
            </li>
            <li className={path === "/contact-me" ? "selected" : ""}>
              <Link to="/contact-me">Contact Me</Link>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <div className="media-icons">
            <h3>
              <a
                href="https://www.linkedin.com/in/adrianclivet/?originalSubdomain=ro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </h3>
            <h3>
              <a
                href="https://www.facebook.com/adrian.clivet"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </h3>
            <h3>
              <a
                href="https://www.instagram.com/adrianklivecz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </h3>
          </div>
          <div className="copyright">
            <p>
              <span>Adrian </span>
              <FontAwesomeIcon icon={faCopyright} />
              <span> 2020</span>
            </p>
            <p id="rights-paragraph">All rights reserved.</p>
          </div>
        </div>
      </div>
    );
  }
}
