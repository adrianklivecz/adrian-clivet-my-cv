import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleCarry,
  faComments,
  faWrench,
  faUserCog,
  faUserShield,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

import html_logo from "./icons/html5.jpg";
import css from "./icons/css3.png";
import javascript from "./icons/javascript.png";
import react from "./icons/React.svg.png";
import git from "./icons/Git.svg.png";
import vsc from "./icons/visual-studio-code-1.png";
import http from "./icons/http.svg.png";
import hiking from "./icons/hiking3.jpg";

import "./AboutMe.css";

export class AboutMe extends Component {
  render() {
    return (
      <div className="about-page-container">
        <p id="about-page-title">Skills, strengths and more</p>
        <div className="about-page-content">
          <div className="about-page-section technologies-and-tools">
            <p className="about-page__section-title">Technologies and tools:</p>
            <ul>
              <li>
                <img src={http} alt="http-logo" className="technologies-logo" />{" "}
                HTTP - fundamentals about the protocol
              </li>
              <li>
                <img
                  src={html_logo}
                  alt="html-logo"
                  className="technologies-logo"
                />{" "}
                HTML5 - creating the structure of an User Interface
              </li>
              <li>
                <img src={css} alt="css-logo" className="technologies-logo" />{" "}
                CSS3 - creating responsive web-pages, animations, flex-box, grid
                layout
              </li>
              <li>
                <img
                  src={javascript}
                  alt="js-logo"
                  className="technologies-logo"
                />{" "}
                Javascript - use of variables, functions, objects, scoping,
                hoisting, AJAX, DOM manipulation
              </li>
              <li>
                <img
                  src={react}
                  alt="react-logo"
                  className="technologies-logo"
                />{" "}
                React.js: JSX, rendering elements, components and props, state
                and lifecycle
              </li>
              <li>
                <img src={git} alt="git-logo" className="technologies-logo" />{" "}
                Git - principles and commands
              </li>
              <li>
                <img src={vsc} alt="vsc-logo" className="technologies-logo" />{" "}
                Visual Studio Code
              </li>
            </ul>
          </div>
          <div className="about-page-section technologies-and-tools">
            <p className="about-page__section-title">Skills:</p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faComments} className="skills-icons" />{" "}
                Communication
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faPeopleCarry}
                  className="skills-icons"
                />{" "}
                Team Work
              </li>
              <li>
                <FontAwesomeIcon icon={faWrench} className="skills-icons" />{" "}
                Problem Solving Oriented
              </li>
              <li>
                <FontAwesomeIcon icon={faUserCog} className="skills-icons" />{" "}
                Adaptability
              </li>
              <li>
                <FontAwesomeIcon icon={faUserShield} className="skills-icons" />{" "}
                Work Ethic
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faClipboardCheck}
                  className="skills-icons"
                />{" "}
                Responsability
              </li>
            </ul>
          </div>
          <div className="about-page-section">
            <p className="about-page__section-title">Others:</p>
            <ul>
              <li>Languages: English - advanced, French - begginer</li>
              <li>Volunteering: "Let's Do It, Romania!", June 2011</li>
            </ul>
          </div>
          <div className="about-page-section">
            <p className="about-page__section-title">Hobbies:</p>
            <ul>
              <li>Travelling</li>
              <li>Listening to good music</li>
              <li>Playing football</li>
              <li>But most of all, hiking</li>
            </ul>
            <img src={hiking} alt="hiking" />
          </div>
        </div>
      </div>
    );
  }
}
