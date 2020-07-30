import React, { Component } from "react";
import image1 from "./images/david-travis-5bYxXawHOQg-unsplash.jpg";
import image3 from "./images/highres_485146091.jpeg";
import image4 from "./images/0.png";
import image5 from "./images/infoLocal.jpg";
import image6 from "./images/patria-bank.jpg";
import image7 from "./images/Raiffeisen_banca-pentru-locuinte.jpg";
import galt6 from "./images/galt6.jpg";
import galt2 from "./images/galt2.jpg";
import galt3 from "./images/galt3.jpg";
import galt4 from "./images/galt4.jpg";
import galt5 from "./images/galt5.jpg";
import Carousel from "react-bootstrap/Carousel";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import "./Experience.css";

export class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  toggleClass = () => {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
    console.log("test");
  };

  render() {
    return (
      <div className="experience-container">
        <p id="experience-page-title">My journey, so far:</p>

        <div className="era-container-first">
          <div className="experience-details">
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="0"
                    onClick={this.toggleClass}
                  >
                    <p className="experience-title">
                      Nov 2019 - Jun 2020: Scoala Informala de IT{" "}
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={
                          this.state.active
                            ? "experience-arrow selected-toggle"
                            : "experience-arrow"
                        }
                      />
                    </p>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className="era-container">
                      <ul>
                        <li>
                          I finally started learning programming, taking a
                          course in Front-End Web Development at "Scoala
                          Informala de IT".
                        </li>
                        <li>
                          During this time, I learned and practiced my skills in
                          HTML, CSS, Javascript and React.
                        </li>
                      </ul>
                      <div className="scit-image-container">
                        <div>
                          <img src={image3} alt="" id="scit-image" />
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="1"
                    onClick={this.toggleClass}
                  >
                    <p className="experience-title">
                      Jan 2018 - Nov 2019: Research and testing{" "}
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={
                          this.state.active
                            ? "experience-arrow selected-toggle"
                            : "experience-arrow"
                        }
                      />
                    </p>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    {" "}
                    <div className="era-container">
                      <div className="experience-image-container">
                        <div className="experience-image-research-container">
                          <img
                            src={image1}
                            alt=""
                            className="experience-image-research"
                          />
                        </div>
                      </div>
                      <div className="experience-details">
                        <ul>
                          <li>
                            Before I started learning about Web Development,
                            after 8+ years working in sales, I wanted to take
                            some time and think about my future.
                          </li>
                          <li>
                            So in this period of time I continued researching
                            some areas that for some time interested me.
                          </li>
                          <li>
                            Among other things, the list included programming,
                            Forex trading and starting an online business on
                            Amazon, for the former actually taking an online
                            class and started my research.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="2"
                    onClick={this.toggleClass}
                  >
                    <p className="experience-title">
                      Oct 2011 - Jan 2018: Sales Consultant at GALT Orologerie
                      Elvetiana{" "}
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={
                          this.state.active
                            ? "experience-arrow selected-toggle"
                            : "experience-arrow"
                        }
                      />
                    </p>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <div className="galt-era-container">
                      <div className="experience-details galt-experience-details">
                        <ul>
                          <li>
                            I started in a totally new field for me, learning
                            and getting passionate about watches.
                          </li>
                          <li>
                            Some of my responsabilities included finding new
                            clients, providing professional counseling to the
                            shop's clients, organizing private presentations
                            with special pieces for top clients and data
                            analysis of the stock and monthly sales variations.
                          </li>
                          <li>
                            One of my biggest improvements to the company was
                            creating a comprehensive form of data analysis,
                            which helped the company to observe the sales trends
                            and adjust the orders accordingly.
                          </li>
                          <li>
                            I am grateful that during this period I got to take
                            a special in-depth look into this fascinating world
                            of luxury watches, visiting factories and
                            participating in the yearly Baselworld watch-fair in
                            Switzerland.
                          </li>
                        </ul>
                      </div>
                      <div className="galt-image-container">
                        <div className="galt-logo-container">
                          <img src={image4} alt="galt-logo" id="galt-logo" />
                        </div>
                        <div className="carousel-container">
                          <Carousel>
                            <Carousel.Item>
                              <img
                                className="d-block w-100"
                                src={galt5}
                                alt="First slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block w-100"
                                src={galt2}
                                alt="Second slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block w-100"
                                src={galt3}
                                alt="Third slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block w-100"
                                src={galt4}
                                alt="Fourth slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block w-100"
                                src={galt6}
                                alt="Fifth slide"
                              />
                            </Carousel.Item>
                          </Carousel>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="3"
                    onClick={this.toggleClass}
                  >
                    <p className="experience-title">
                      Aug 2010 - Jul 2011: Account Manager at infoLocal{" "}
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={
                          this.state.active
                            ? "experience-arrow selected-toggle"
                            : "experience-arrow"
                        }
                      />
                    </p>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <div className="era-container">
                      <div className="wide-logo-image-container">
                        <div>
                          <img
                            src={image5}
                            alt=""
                            className="wide-logo-image"
                          />
                        </div>
                      </div>
                      <div className="experience-details">
                        <ul>
                          <li>
                            infoLocal was a very interesting start-up, providing
                            a premium free advertising magazine to the citizens
                            of Cluj-Napoca and also a delivery service.
                          </li>
                          <li>
                            Part of my responsabilities included finding new
                            clients, organizing meetings with the interested
                            clients, following-up and upselling for the existing
                            clients.
                          </li>
                          <li>
                            I was part of a very ambitious team and I learned a
                            lot from my colleagues.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="4"
                    onClick={this.toggleClass}
                  >
                    <p className="experience-title">
                      May 2010 - Aug 2010: Loans Consultant at Patria Credit
                      (now Patria Bank){" "}
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={
                          this.state.active
                            ? "experience-arrow selected-toggle"
                            : "experience-arrow"
                        }
                      />
                    </p>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    <div className="era-container">
                      <div className="experience-details">
                        <ul>
                          <li>
                            With this new job, I was continuing my experience in
                            selling banking products.
                          </li>
                          <li>
                            At Patria Credit, my responsabilities included
                            finding new clients, mainly using cold-calling,
                            setting up meetings with interested clients,
                            providing professional counseling.
                          </li>
                        </ul>
                      </div>
                      <div className="wide-logo-image-container">
                        <div>
                          <img
                            src={image6}
                            alt=""
                            className="wide-logo-image"
                          />
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="5"
                    onClick={this.toggleClass}
                  >
                    <p className="experience-title">
                      Apr 2009 - Nov 2009: Financial Consultant at Consultanta
                      Financiara Germana{" "}
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={
                          this.state.active
                            ? "experience-arrow selected-toggle"
                            : "experience-arrow"
                        }
                      />
                    </p>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                  <Card.Body>
                    <div className="era-container">
                      <div className="wide-logo-image-container">
                        <div>
                          <img
                            src={image7}
                            alt=""
                            className="wide-logo-image"
                          />
                        </div>
                      </div>
                      <div className="experience-details">
                        <ul>
                          <li>
                            Consultanta Financiara Germana was a partner of
                            Raiffeisen Banca Pentru Locuinte, but it also
                            offered it own banking products.
                          </li>
                          <li>
                            Some of my responsabilities included finding new
                            clients (individuals or companies) and offering the
                            suiting product, post-selling consultance.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
      </div>
    );
  }
}
