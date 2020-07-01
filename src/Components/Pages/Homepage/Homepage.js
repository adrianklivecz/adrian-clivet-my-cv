import React, { Component } from "react";
import profile from "./IMAG4541.jpg";

import "./Homepage.css";

export class Homepage extends Component {
  render() {
    return (
      <div className="homepage-container">
        <div>
          <img src={profile} alt="" id="profile-image" />
        </div>
        <div className="homepage-greeting">
          <h3>Hi, I'm Adi.</h3>
          <p>
            I'm a passionate learner in Front End Development, focussing right
            now on React.
          </p>
          <p>
            Having a background in Marketing and Sales in the luxury goods
            industry, I'm setting my veils on a different path, exciting and
            full of possibilities at the same time.
          </p>
          <p></p>
        </div>
      </div>
    );
  }
}
