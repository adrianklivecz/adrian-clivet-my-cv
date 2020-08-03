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
          <h4 className="first-name">Adrian Cliveț</h4>
        </div>
        <div className="buttons-container">
          <ul className="menu-list">
            <li className={path === "/" ? "selected" : ""}>
              <Link to="/" className="menu-buttons">
                Home
              </Link>
            </li>
            <li className={path === "/experience" ? "selected" : ""}>
              <Link to="/experience" className="menu-buttons">
                Experience
              </Link>
            </li>
            <li className={path === "/education" ? "selected" : ""}>
              <Link to="/education" className="menu-buttons">
                Education
              </Link>
            </li>
            <li className={path === "/project" ? "selected" : ""}>
              <Link to="/project" className="menu-buttons">
                Project
              </Link>
            </li>
            <li className={path === "/about-me" ? "selected" : ""}>
              <Link to="/about-me" className="menu-buttons">
                About Me
              </Link>
            </li>
            <li className={path === "/contact-me" ? "selected" : ""}>
              <Link to="/contact-me" className="menu-buttons">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <div className="media-icons">
            <p>
              <a
                href="https://www.linkedin.com/in/adrianclivet/?originalSubdomain=ro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </p>
            <p>
              <a
                href="https://www.facebook.com/adrian.clivet"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </p>
            <p>
              <a
                href="https://www.instagram.com/adrianklivecz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </p>
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
