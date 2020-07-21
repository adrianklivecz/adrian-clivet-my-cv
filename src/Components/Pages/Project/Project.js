import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import homepage1 from "./CinetabScreens/Cinetab - Homepage.png";
import homepage2 from "./CinetabScreens/Cinetab - Homepage 2.png";
import homepage3 from "./CinetabScreens/Cinetab - Header loggedin.png";
import allMoviesPage from "./CinetabScreens/Cinetab - Pagination.png";
import genresPage from "./CinetabScreens/Cinetab - Genres page.png";
import advancedSearchPage from "./CinetabScreens/Cinetab - Advanced Search with results.png";
import moviePage from "./CinetabScreens/Cinetab - Movie page.png";
import editMovie from "./CinetabScreens/Cinetab - Edit Movie.png";
import deleteMovie from "./CinetabScreens/Cinetab - Delete Movie (modal example).png";
import addMovie from "./CinetabScreens/Cinetab - Add Movie validation.png";
import loginModal from "./CinetabScreens/Cinetab - Login&Sign-up.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faTrello } from "@fortawesome/free-brands-svg-icons";
import { faLevelDownAlt } from "@fortawesome/free-solid-svg-icons";

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
              <span style={{ fontStyle: "italic" }}>"IMDb"</span>, using an
              external API to populate our app with data.
            </p>
            <p style={{ fontStyle: "italic" }}>Project summary:</p>
            <ul>
              <li>The team consisted of 4 members.</li>
              <li>
                We named our app{" "}
                <span className="highlighted-words">"Cinetab"</span>, which had
                to include some specific functionalities: among other things,
                advanced search, movie page details, creating and using accounts
                to edit, delete or add a movie, or movie list pagination.
              </li>
              <li>
                We chose to build our app using{" "}
                <FontAwesomeIcon icon={faReact} style={{ color: "#29a3c2" }} />
                <span className="highlighted-words">React.js</span>, because of
                its simplicity, being component-based and having reusable
                elements, but also because the code is more predictable and
                easier to debug.
              </li>
              <li>
                Because the project's development started in some peculiar
                worldwide circumstances, meeting online was our only choice. We
                used Skype to discuss and share screens, agreeing upon the
                design and functionalities of our app. We assigned and kept
                track of our individual tasks on a{" "}
                <FontAwesomeIcon icon={faTrello} style={{ color: "#007AC0" }} />
                <span className="highlighted-words">Trello</span> project board.
              </li>
              <li>
                The app's code can be seen{" "}
                <a
                  href="https://github.com/AlexandruNasalean/CineTabs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
                , and you can check out some screens down below.{" "}
                <FontAwesomeIcon icon={faLevelDownAlt} />
              </li>
            </ul>
          </div>
        </div>
        <div className="project-page-container">
          <div className="project-page-intro">
            <p>Here are some screens from our app's pages:</p>
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
                    <p>Homepage - top section, with header</p>
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
                  <p>Homepage - bottom section, with footer</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src={allMoviesPage}
                  alt="Second slide"
                />
                <Carousel.Caption
                  style={{
                    position: "relative",
                    left: "0",
                    textAlign: "center",
                  }}
                >
                  <p>All Movies page, with pagination</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block" src={genresPage} alt="Third slide" />
                <Carousel.Caption
                  style={{
                    position: "relative",
                    left: "0",
                    textAlign: "center",
                  }}
                >
                  <p>Genres page</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src={advancedSearchPage}
                  alt="Second slide"
                />
                <Carousel.Caption
                  style={{
                    position: "relative",
                    left: "0",
                    textAlign: "center",
                  }}
                >
                  <p>Advanced Search page</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div className="project-page-container">
          <div className="project-page-intro">
            <p>After the user logs in, the header is changed:</p>
          </div>
          <div className="project-carousel-container">
            <Carousel>
              <Carousel.Item className="carousel-item-test">
                <img className="d-block" src={loginModal} alt="First slide" />
                <div className="carousel-caption-test">
                  <Carousel.Caption
                    style={{
                      position: "relative",
                      left: "0",
                      textAlign: "center",
                    }}
                  >
                    <p>Login screen</p>
                  </Carousel.Caption>
                </div>
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
        <div className="project-page-container">
          <div className="project-page-intro">
            <p>
              If logged-in, the user can add a movie, or, on the movie page, he
              can edit or delete it:
            </p>
          </div>
          <div className="project-carousel-container">
            <Carousel>
              <Carousel.Item className="carousel-item-test">
                <img className="d-block" src={addMovie} alt="First slide" />
                <div className="carousel-caption-test">
                  <Carousel.Caption
                    style={{
                      position: "relative",
                      left: "0",
                      textAlign: "center",
                    }}
                  >
                    <p>Add movie page, with validation</p>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block" src={moviePage} alt="Second slide" />
                <Carousel.Caption
                  style={{
                    position: "relative",
                    left: "0",
                    textAlign: "center",
                  }}
                >
                  <p>Movie page</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block" src={editMovie} alt="Third slide" />
                <Carousel.Caption
                  style={{
                    position: "relative",
                    left: "0",
                    textAlign: "center",
                  }}
                >
                  <p>Edit movie page</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block" src={deleteMovie} alt="Third slide" />
                <Carousel.Caption
                  style={{
                    position: "relative",
                    left: "0",
                    textAlign: "center",
                  }}
                >
                  <p>Delete movie - modal</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}
