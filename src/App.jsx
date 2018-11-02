import React, {Component} from "react";
import "./App.css";
import Routes from "./routes/routes.jsx";
import Jumbotron from "./jumbotron/jumbotron.jsx";
import About from "./about/about.jsx";
import Research from "./research/research.jsx";
import Team from "./team/team.jsx";
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
        <Research />
        <Team />
        <Contact />
        <Disclaimer />
      </div>
    );
  }
}

export default App;
