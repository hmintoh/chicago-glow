import React, {Component} from "react";
import AboutPopUp from "../about-popup/about-popup";
import "./about.css";

class About extends Component {
  constructor() {
    super();
    this.state = {
      showSlideDeck: false
    };
  }

  handleClick = () => {
    this.setState({showSlideDeck: !this.state.showSlideDeck});
  };

  render() {
    const {showSlideDeck} = this.state;

    return (
      <div id="about" className="secB">
        <div className="container">
          <h1>
            Broadening access to quantitative global factor investing from the
            frontier of academic research.
          </h1>
          <h2>About Us</h2>
          <h5>
            Chicago Global Strategies is a Cayman Islands-domiciled quantitative
            global factor investing fund that is created based on the guiding
            principles based on over 50 years of financial markets research done
            at or influenced by the intellectual tradition from the University
            of Chicago. We are committed to maintaining low fees, take a
            long-term efficient markets viewpoint, and deploy guiding principles
            in behavioral finance to create portfolios with defensive and
            opportunistic tilts to help clients grow their wealth over the long
            term.
          </h5>
          <button className="btn_investNow" onClick={this.handleClick}>
            Learn More
          </button>
          {showSlideDeck && <AboutPopUp />}
        </div>
      </div>
    );
  }
}

export default About;
