import React, { Component } from "react";
import fsegaImage from "./logo.png";

import "./Education.css";

export class Education extends Component {
  render() {
    return (
      <div className="education-container">
        <p id="education-page-title">My education:</p>
        <div className="era-education-container-first">
          <div className="education-details">
            <p className="education-title">
              Master's degree: Business Administration and Management
            </p>
            <p className="education-title">
              2019 - 2011, Faculty of Economics and Business Administration,
              Cluj-Napoca
            </p>
            <ul>
              <li>
                I started my Master's degree courses one year after getting my
                license in Marketing, because I wanted to analyse the
                possibilities that I had.
              </li>
              <li>
                So, I chose Business Administration and Management because I
                wanted to learn more about the principles in having and running
                a business.
              </li>
              <li>
                My master's degree paper was titled "Business Negociation".
              </li>
            </ul>
          </div>
          <div>
            <div className="education-image-container">
              <div>
                <img src={fsegaImage} alt="" className="education-image" />
              </div>
            </div>
          </div>
        </div>
        <div className="era-container">
          <div>
            <div className="education-image-container">
              <div>
                <img src={fsegaImage} alt="" className="education-image" />
              </div>
            </div>
          </div>
          <div className="education-details">
            <p className="education-title">License: Marketing</p>
            <p className="education-title">
              2005 - 2008, Faculty of Economics and Business Administration,
              Cluj-Napoca
            </p>
            <ul>
              <li>
                Naturally, after finishing a high-school based on Economics,
                Accountancy and Marketing, it felt the right choice to continue
                my studies at a faculty that offered me more in-depth knowledge
                in this areas.
              </li>
              <li>
                After the first year of studying commonly disciplines with the
                other students, it was easy for me to choose Marketing
                specialization, being a field that I was drawn to.
              </li>
              <li>
                My license's degree paper was titled "Business Environment".
              </li>
            </ul>
          </div>
        </div>
        <div className="era-container">
          <div className="education-details">
            <p className="education-title">
              College Degree: Accountancy specialization
            </p>
            <p className="education-title">
              2001 - 2005, "Octav Onicescu" Economics College, Botoșani{" "}
            </p>
            <ul>
              <li>
                Being a well-regarded high-school, at which some other members
                of my family also studied at, it was an easy choice.
              </li>
              <li>
                Here I studied Economics, Accountancy, among others. But here is
                were I discovered Marketing and I started to get more and more
                interested in it.
              </li>
            </ul>
          </div>
          <div>
            <div className="education-image-container">
              <div>
                <p className="education-place-title">Colegiul Economic</p>
                <p className="education-place-title">„Octav Onicescu”,</p>
                <p className="education-place-title">Botoșani</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
