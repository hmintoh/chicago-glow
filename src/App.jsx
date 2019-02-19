import React, {Component} from "react";
import "./App.css";
import Routes from "./components/routes/routes.jsx";
import DisclaimerPopUp from "./components/disclaimer-popup/disclaimer-popup.jsx";

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
      </div>
    ) : (
      <DisclaimerPopUp accepted={this.toggleDisclaimerPage} />
    );
  }
}

export default App;
