import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Homepage } from "./Components/Pages/Homepage/Homepage";
import { Experience } from "./Components/Pages/Experience/Experience";
import { Education } from "./Components/Pages/Education/Education";
import { AboutMe } from "./Components/Pages/AboutMe/AboutMe";
import { ContactMe } from "./Components/Pages/ContactMe/ContactMe";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/" component={Header} />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/about-me" component={AboutMe} />
          <Route exact path="/contact-me" component={ContactMe} />
        </Router>
      </div>
    );
  }
}

export default App;
