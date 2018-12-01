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

  componentDidUpdate = () => {
    window.scrollTo(0, 0);
  };

  render() {
    const {acceptedDisclaimer} = this.state;
    return acceptedDisclaimer ? (
      <div ref={ref => (this._div = ref)}>
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
      <DisclaimerPopUp accepted={this.toggleDisclaimerPage} />
    );
  }
}

export default App;
