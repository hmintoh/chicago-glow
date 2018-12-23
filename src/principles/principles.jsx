import React, {Component} from "react";
import ReactModal from "react-modal";
import "./principles.css";
import Principles_Extended from "../principles-extended/principles-extended";

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

class Principles extends Component {
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
    return <Principles_Extended />;
  };

  render() {
    const {showModal} = this.state;

    return (
      <div id="principles" className="secA">
        <div className="container">
          <h2>Principles</h2>
          <div className="services_grid">
            <div className="services_item">
              <h3>Low Fees</h3>
              <p>
                Investors pay over $100 billion a year in management fees. Fee
                reduction is the purest outperformance that funds can deliver to
                investors. Our quantitative investment approach that allows us
                to analyze over 30,000 stocks globally at minimal costs without
                sacrificing performance.
              </p>
            </div>
            <div className="services_item">
              <h3>Long Term Efficient</h3>
              <p>
                Over the long term markets reflect fundamentals, but even Eugene
                Fama does not believe that markets are efficient always. Our
                disciplined strategies are refined from Chicago research based
                on over 50 years of data across over 20 countries to take
                advantage of both short-term errors and long-term corrections.
              </p>
            </div>
            <div className="services_item">
              <h3>Behavioral Finance</h3>
              <p>
                Individual investors tend to chase returns and overreact to
                short-term news. We exploit these short-term errors in the
                market while striving to reduce behavioral biases among our own
                investors through the application of Richard Thaler’s principles
                using nudges and sludges.
              </p>
            </div>
            <div />
            <div className="principles-button">
              <button className="btn_more" onClick={this.openModal}>
                Learn More
              </button>
            </div>
            <div />
          </div>
          <ReactModal isOpen={showModal} style={customStyles}>
            <div className="container">
              {this.modalToShow()}
              <button className="btn_more" onClick={this.handleCloseModal}>
                Close
              </button>
            </div>
          </ReactModal>
        </div>
      </div>
    );
  }
}

export default Principles;
