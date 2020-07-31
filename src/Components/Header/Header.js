import React, { Component } from "react";
import { NavLink } from "react-router-dom";
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
    return (
      <div className="header-container">
        <div className="top">
          <h4 className="first-name">Adrian Cliveț</h4>
        </div>
        <div className="buttons-container">
          <ul className="menu-list">
            <li>
              <NavLink
                to="/home"
                className="menu-buttons"
                activeClassName="selected"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/experience"
                className="menu-buttons"
                activeClassName="selected"
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/education"
                className="menu-buttons"
                activeClassName="selected"
              >
                Education
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/project"
                className="menu-buttons"
                activeClassName="selected"
              >
                Project
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-me"
                className="menu-buttons"
                activeClassName="selected"
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-me"
                className="menu-buttons"
                activeClassName="selected"
              >
                Contact Me
              </NavLink>
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
