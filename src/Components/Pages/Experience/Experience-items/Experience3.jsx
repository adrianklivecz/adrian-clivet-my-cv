import { Carousel } from "bootstrap";
import React from "react";
import image4 from "../images/0.png";
import galt6 from "../images/galt6.jpg";
import galt2 from "../images/galt2.jpg";
import galt3 from "../images/galt3.jpg";
import galt4 from "../images/galt4.jpg";
import galt5 from "../images/galt5.jpg";

export const Experience3 = () => (
  <div className="galt-era-container">
    <div className="experience-details galt-experience-details">
      <ul>
        <li>
          I started in a totally new field for me, learning and getting
          passionate about watches.
        </li>
        <li>
          Some of my responsabilities included finding new clients, providing
          professional counseling to the shop's clients, organizing private
          presentations with special pieces for top clients and data analysis of
          the stock and monthly sales variations.
        </li>
        <li>
          One of my biggest improvements to the company was creating a
          comprehensive form of data analysis, which helped the company to
          observe the sales trends and adjust the orders accordingly.
        </li>
        <li>
          I am grateful that during this period I got to take a special in-depth
          look into this fascinating world of luxury watches, visiting factories
          and participating in the yearly Baselworld watch-fair in Switzerland.
        </li>
      </ul>
    </div>
    <div className="galt-image-container">
      <div className="galt-logo-container">
        <img src={image4} alt="galt-logo" id="galt-logo" />
      </div>
      <div className="carousel-container">
        {/* <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={galt5} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={galt2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={galt3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={galt4} alt="Fourth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={galt6} alt="Fifth slide" />
          </Carousel.Item>
        </Carousel> */}
      </div>
    </div>
  </div>
);
