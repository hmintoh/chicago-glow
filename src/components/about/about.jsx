import React, {Component} from "react";
import ReactModal from "react-modal";
import AboutPopUp from "../about-popup/about-popup";
import "./about.css";

const customStyles = {
  overlay: {
    zIndex: 2
  },
  content: {
    backgroundColor: "#e6e6e7",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%"
  }
};

ReactModal.setAppElement("#root");

class About extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  openModal = () => {
    this.setState({showModal: true});
  };

  handleCloseModal = () => {
    this.setState({showModal: false});
  };

  modalToShow = () => {
    return <AboutPopUp />;
  };

  render() {
    const {showModal} = this.state;

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
          <button className="btn_investNow" onClick={this.openModal}>
            Learn More
          </button>

          <ReactModal isOpen={showModal} style={customStyles}>
            <div className="container">
              {this.modalToShow()}
              <button className="btn_close" onClick={this.handleCloseModal}>
                Close
              </button>
            </div>
          </ReactModal>
        </div>
      </div>
    );
  }
}

export default About;
