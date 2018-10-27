import React, {Component} from "react";
import "./App.css";
import Routes from "./routes/routes.jsx";
import Jumbotron from "./jumbotron/jumbotron.jsx";
import About from "./about/about.jsx";
import Offerings from "./offerings/offerings.jsx";
import Team from "./team/team.jsx";
import AdvisoryBoard from "./advisory/advisory";
import Contact from "./contact/contact.jsx";
import Disclaimer from "./disclaimer/disclaimer.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Cormorant+Garamond|Proza+Libre"
        />
        <Routes />
        <Jumbotron />
        <About />
        <Offerings />
        <Team />
        <AdvisoryBoard />
        <Contact />
        <Disclaimer />
      </div>
    );
  }
}

export default App;
