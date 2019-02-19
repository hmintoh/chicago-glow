import React, {Component} from "react";
import Jumbotron from "./components/jumbotron/jumbotron.jsx";
import About from "./components/about/about.jsx";
import Principles from "./components/principles/principles.jsx";
import Team from "./components/team/team.jsx";
import AdvisoryBoard from "./components/advisory/advisory.jsx";
import Research from "./components/research/research.jsx";
import Contact from "./components/contact/contact.jsx";
import Disclaimer from "./components/disclaimer/disclaimer.jsx";

class Home extends Component {
  componentDidUpdate = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div className="animated fadeIn slow">
        <Jumbotron />
        <About />
        <Principles />
        <Team />
        <AdvisoryBoard />
        <Research />
        <Contact />
        <Disclaimer />
      </div>
    );
  }
}

export default Home;
