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
      </div>
    );
  }
}

export default App;
