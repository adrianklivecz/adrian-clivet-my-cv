import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Homepage } from "./Components/Pages/Homepage/Homepage";
import { Experience } from "./Components/Pages/Experience/Experience";
import { Education } from "./Components/Pages/Education/Education";
import { AboutMe } from "./Components/Pages/AboutMe/AboutMe";
import { ContactMe } from "./Components/Pages/ContactMe/ContactMe";
import { Project } from "./Components/Pages/Project/Project";
import { WelcomeModal } from "./Components/WelcomeModal/WelcomeModal";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Carousel } from "bootstrap";
import galt6 from "./Components/Pages/Experience/images/galt6.jpg";

import galt2 from "./Components/Pages/Experience/images/galt2.jpg";
import galt3 from "./Components/Pages/Experience/images/galt3.jpg";
import galt4 from "./Components/Pages/Experience/images/galt4.jpg";
import galt5 from "./Components/Pages/Experience/images/galt5.jpg";

class App extends Component {
  state = {
    showOnLoadModal: false,
  };

  componentDidMount() {
    this.showModal();
  }

  showModal = () => {
    this.setState({ showOnLoadModal: true });
  };

  handleHideLogOutModal = () => {
    this.setState({ showOnLoadModal: false });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/" component={Header} />
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={{ enter: 800, exit: 0 }}
                  classNames="fade"
                >
                  <Switch location={location}>
                    <Route
                      exact
                      path="/adrian-clivet-my-cv"
                      component={Homepage}
                    />
                    <Route exact path="/experience" component={Experience} />
                    <Route exact path="/education" component={Education} />
                    <Route exact path="/project" component={Project} />
                    <Route exact path="/about-me" component={AboutMe} />
                    <Route exact path="/contact-me" component={ContactMe} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />

          <WelcomeModal
            show={this.state.showOnLoadModal}
            closeModal={this.handleHideLogOutModal}
          />
        </Router>
        <Carousel>
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
        </Carousel>
      </div>
    );
  }
}

export default App;
