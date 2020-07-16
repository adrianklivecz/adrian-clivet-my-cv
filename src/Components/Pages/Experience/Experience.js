import React, { useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
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
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

import "./Experience.css";

export function Experience() {
  const [open, setOpen] = useState(false);
  return (
    <div className="experience-container">
      <p id="experience-page-title">My journey, so far:</p>
      <div className="era-container-first">
        <div className="experience-details">
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            Nov 2019 - Jun 2020
          </Button>
          <Collapse in={open}>
            <div id="example-collapse-text">
              <ul>
                <li>
                  I finally started learning programming, taking a course in
                  Front-End Web Development at "Scoala Informala de IT".
                </li>
                <li>
                  During this time, I learned and practiced my skills in HTML,
                  CSS, Javascript and React.
                </li>
              </ul>
              <div className="scit-image-container">
                <div>
                  <img src={image3} alt="" id="scit-image" />
                </div>
              </div>
            </div>
          </Collapse>

          {/* <p className="experience-title">Nov 2019 - Jun 2020</p>
          <ul>
            <li>
              I finally started learning programming, taking a course in
              Front-End Web Development at "Scoala Informala de IT".
            </li>
            <li>
              During this time, I learned and practiced my skills in HTML, CSS,
              Javascript and React.
            </li>
          </ul> */}
        </div>
        {/* <div className="scit-image-container">
          <div>
            <img src={image3} alt="" id="scit-image" />
          </div>
        </div> */}
      </div>
      <div className="era-container">
        <div className="experience-image-container">
          <div className="experience-image-research-container">
            <img src={image1} alt="" className="experience-image-research" />
          </div>
        </div>
        <div className="experience-details">
          <p className="experience-title">Jan 2018 - Nov 2019</p>
          <ul>
            <li>
              Before I started learning about Web Development, after 8+ years
              working in sales, I wanted to take some time and think about my
              future.
            </li>
            <li>
              So in this period of time I continued researching some areas that
              for some time interested me.
            </li>
            <li>
              Among other things, the list included programming, Forex trading
              and starting an online business on Amazon, for the former actually
              taking an online class and started my research.
            </li>
          </ul>
        </div>
      </div>
      <div className="galt-era-container">
        <div className="experience-details galt-experience-details">
          <p className="experience-title">
            Oct 2011 - Jan 2018: Sales Consultant at GALT Orologerie Elvetiana
          </p>
          <ul>
            <li>
              I started in a totally new field for me, learning and getting
              passionate about watches.
            </li>
            <li>
              Some of my responsabilities included finding new clients,
              providing professional counseling to the shop's clients,
              organizing private presentations with special pieces for top
              clients and data analysis of the stock and monthly sales
              variations.
            </li>
            <li>
              One of my biggest improvements to the company was creating a
              comprehensive form of data analysis, which helped the company to
              observe and fastly adjust the orders.
            </li>
            <li>
              I am grateful that during this period I got to take a special
              in-depth look into this fascinating world of luxury watches,
              visiting factories and participating in the yearly Baselworld
              watch-fair in Switzerland.
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
                <img className="d-block w-100" src={galt6} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={galt2} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={galt3} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={galt4} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={galt5} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      <div className="era-container">
        <div className="wide-logo-image-container">
          <div>
            <img src={image5} alt="" className="wide-logo-image" />
          </div>
        </div>
        <div className="experience-details">
          <p className="experience-title">
            Aug 2010 - Jul 2011: Account Manager at infoLocal
          </p>
          <ul>
            <li>
              infoLocal was a very interesting start-up, providing a premium
              free advertising magazine to the citizens of Cluj-Napoca and also
              a delivery service.
            </li>
            <li>
              Part of my responsabilities included finding new clients,
              organizing meetings with the interested clients, following-up and
              upselling for the existing clients.
            </li>
            <li>
              I was part of a very ambitious team and I learned a lot from my
              colleagues.
            </li>
          </ul>
        </div>
      </div>
      <div className="era-container">
        <div className="experience-details">
          <p className="experience-title">
            May 2010 - Aug 2010: Loans Consultant at Patria Credit (now Patria
            Bank)
          </p>
          <ul>
            <li>
              With this new job, I was continuing my experience in selling
              banking products.
            </li>
            <li>
              At Patria Credit, my responsabilities included finding new
              clients, mainly using cold-calling, setting up meetings with
              interested clients, providing professional counseling.
            </li>
          </ul>
        </div>
        <div className="wide-logo-image-container">
          <div>
            <img src={image6} alt="" className="wide-logo-image" />
          </div>
        </div>
      </div>
      <div className="era-container">
        <div className="wide-logo-image-container">
          <div>
            <img src={image7} alt="" className="wide-logo-image" />
          </div>
        </div>
        <div className="experience-details">
          <p className="experience-title">
            Apr 2009 - Nov 2009: Financial Consultant at Consultanta Financiara
            Germana
          </p>
          <ul>
            <li>
              Consultanta Financiara Germana was a partner of Raiffeisen Banca
              Pentru Locuinte, but it also offered it own banking products.
            </li>
            <li>
              Some of my responsabilities included finding new clients
              (individuals or companies) and offering the suiting product,
              post-selling consultance.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  // state = {
  //   items: [1, 2, 3, 4, 5, 6, 7],
  // };
  // fetchMoreData = () => {
  //   setTimeout(() => {
  //     this.setState({
  //       items: this.state.items.concat([1, 2]),
  //     });
  //   }, 1000);
  // };
  // render() {
  //   return (
  //     <div>
  //       <hr />
  //       <div id="scrollableDiv" style={{ height: 50, overflow: "auto" }}>
  //         <InfiniteScroll
  //           dataLength={this.state.items.length}
  //           next={this.fetchMoreData}
  //           hasMore={true}
  //           loader={<h4>Loading...</h4>}
  //           scrollableTarget="scrollableDiv"
  //         >
  //           {this.state.items.map((i, index) => (
  //             <div key={index}>div - #{index}</div>
  //           ))}
  //         </InfiniteScroll>
  //       </div>
  //     </div>
  //   );
  // }
}
