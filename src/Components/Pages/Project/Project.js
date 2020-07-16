import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import homepage1 from "./CinetabScreens/Cinetab - Homepage.png";
import homepage2 from "./CinetabScreens/Cinetab - Homepage 2.png";
import homepage3 from "./CinetabScreens/Cinetab - Header loggedin.png";
// import homepage1 from "./CinetabScreens/Cinetab - Homepage.png";
// import homepage1 from "./CinetabScreens/Cinetab - Homepage.png";
// import homepage1 from "./CinetabScreens/Cinetab - Homepage.png";
// import homepage1 from "./CinetabScreens/Cinetab - Homepage.png";
// import homepage1 from "./CinetabScreens/Cinetab - Homepage.png";
// import homepage1 from "./CinetabScreens/Cinetab - Homepage.png";

import "./Project.css";

export class Project extends Component {
  render() {
    return (
      <div className="group-project-container">
        <p id="group-project-page-title">Team project - "Cinetab"</p>
        <div className="project-details-container">
          <div className="project-details">
            <p className="project-title">
              At the end of the course in Front-End Web Development at "Scoala
              Informala de IT", the final project was to design and create an
              application, similar to the movie database{" "}
              <span style={{ fontStyle: "italic" }}>IMDb</span>, using an
              external API to populate our app with data.
            </p>
            <p>Project summary:</p>
            <ul>
              <li>The team consisted of 4 members.</li>
              <li>
                We called our app "Cinetab", which had to include some specific
                functionalities: among other things, advanced search, movie page
                details, creating and using accounts to edit, delete or add a
                movie or movie list pagination.
              </li>
              <li>
                We chose to build our app using{" "}
                <span style={{ fontWeight: "bolder" }}> React.js</span>, because
                of its simplicity, being component-based and having reusable
                elements, but also because the code is more predictable and
                easier to debug.
              </li>
            </ul>
          </div>
        </div>
        <div className="project-carousel-container">
          <Carousel>
            <Carousel.Item className="carousel-item-test">
              <img className="d-block" src={homepage1} alt="First slide" />
              <div className="carousel-caption-test">
                <Carousel.Caption
                  style={{
                    position: "relative",
                    left: "0",
                    textAlign: "center",
                  }}
                >
                  <p>Homepage - top section</p>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block" src={homepage2} alt="Second slide" />
              <Carousel.Caption
                style={{
                  position: "relative",
                  left: "0",
                  textAlign: "center",
                }}
              >
                <p>Homepage - bottom section</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block" src={homepage3} alt="Third slide" />
              <Carousel.Caption
                style={{
                  position: "relative",
                  left: "0",
                  textAlign: "center",
                }}
              >
                <p>Logged In - header change</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}
