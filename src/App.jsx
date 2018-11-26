import React, {Component} from "react";
import "./App.css";
import Routes from "./routes/routes.jsx";
import Jumbotron from "./jumbotron/jumbotron.jsx";
import About from "./about/about.jsx";
import Principles from "./principles/principles.jsx";
import Team from "./team/team.jsx";
import AdvisoryBoard from "./advisory/advisory.jsx";
import Research from "./research/research.jsx";
import Contact from "./contact/contact.jsx";
import Disclaimer from "./disclaimer/disclaimer.jsx";
import DisclaimerPopUp from "./disclaimer-popup/disclaimer-popup.jsx";
import "animate.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {acceptedDisclaimer: false};
  }

  toggleDisclaimerPage = () => {
    this.setState({acceptedDisclaimer: true});
  };

  toggelRedirect = () => {
    return <a href="https://www.google.com/" />;
  };

  render() {
    const {acceptedDisclaimer} = this.state;
    return acceptedDisclaimer ? (
      <div>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Cormorant+Garamond|Proza+Libre"
        />
        <Routes />
        <Jumbotron />
        <About />
        <Principles />
        <Team />
        <AdvisoryBoard />
        <Research />
        <Contact />
        <Disclaimer />
      </div>
    ) : (
      <DisclaimerPopUp
        accepted={this.toggleDisclaimerPage}
        redirected={this.toggelRedirect}
      />
    );
  }
}

export default App;
