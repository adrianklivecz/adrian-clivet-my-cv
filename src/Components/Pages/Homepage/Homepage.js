import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faAngular } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import "./Homepage.css";
import profile from "./IMAG4541.jpg";

export class Homepage extends Component {
  render() {
    return (
      <div className="homepage-container">
        <div className="image-container">
          <div className="profile-image">
            <div className="profile-image-front">
              <img src={profile} alt="" className="profile-image" />
            </div>
            <div className="profile-image-back">
              <div className="profile-image-back-inner">
                <p>Just me,</p>
                <p>doing a flip.</p>
                <p>Check out the other sections of my website.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="homepage-greeting">
          <h4>Hi, I'm Adi.</h4>
          <p>
            I'm a passionate learner in Front End Development, focussing right
            now on{" "}
            <FontAwesomeIcon icon={faReact} style={{ color: "#29a3c2" }} />
            React and{" "}
            <FontAwesomeIcon icon={faAngular} style={{ color: "darkred" }} />
            Angular, based in Cluj-Napoca.
          </p>
          <p>
            Having a background in Marketing and Sales in the luxury goods
            industry, I'm setting my veils on a different path, exciting and
            full of possibilities at the same time.
          </p>
        </div>
      </div>
    );
  }
}
