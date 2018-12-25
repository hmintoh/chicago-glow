import React, {Component} from "react";
import ReactModal from "react-modal";
import bh from "./bh.png";
import ii from "./ii.png";
import em from "./em.png";
import "./research.css";

const customStyles = {
  overlay: {
    zIndex: 2
  },
  content: {
    top: "20px",
    left: "20px",
    right: "20px",
    bottom: "20px"
  }
};

class Research extends Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false, title: ""};
  }

  handleIndexModal = () => {
    this.setState({showModal: true, title: "Index Investing"});
  };

  handleEfficientxModal = () => {
    this.setState({showModal: true, title: "Efficient Markets"});
  };

  handleBehavioralModal = () => {
    this.setState({showModal: true, title: "Behavioral Finance"});
  };

  handleCloseModal = () => {
    this.setState({showModal: false});
  };

  modalToShow = title => {
    if (title === "Index Investing") {
      return (
        <div className="animated slow fadeIn modal-grid">
          <div className="modal-item">
            <h3>{title}</h3>
            <p>
              Fewer than 15% of large-cap funds beat the S&P 500 in the last 10
              years. Poor performance brought spotlight on fees, which became
              hard to justify. Many active managers are really closet indexers,
              holding most stocks in their benchmarks.
            </p>
          </div>
          <div className="modal-item">
            <img src={ii} className="modal_item research_images" alt="ii" />
          </div>
        </div>
      );
    } else if (title === "Efficient Markets") {
      return (
        <div className="animated slow fadeIn modal-grid">
          <div className="modal-item">
            <h3>{title}</h3>
            <p>
              Investors spend $100 billion per year trying to beat the market.
              Decades of data prove index strategies do better over the long
              term. We have developed a product that addresses this issue and
              lets you take advantage of Chicago-style investing.
            </p>
          </div>
          <div className="modal-item">
            <img src={em} className="research_images" alt="em" />
          </div>
        </div>
      );
    } else if (title === "Behavioral Finance") {
      return (
        <div className="animated slow fadeIn modal-grid">
          <div className="modal-item">
            <h3>{title}</h3>
            <p>
              Due to attempts at market timing and poor behavioral finance
              choices (selling after a market correction), the average investor
              actually underperforms the overall market.
            </p>
          </div>
          <div className="modal-item">
            <img src={bh} className="research_images" alt="bh" />
          </div>
        </div>
      );
    }
  };

  render() {
    const {showModal, title} = this.state;

    return (
      <div id="research" className="secA">
        <div className="container">
          <h2>Featured Research</h2>
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
              <button className="btn_more" onClick={this.handleIndexModal}>
                Learn More
              </button>
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
              <button className="btn_more" onClick={this.handleEfficientxModal}>
                Learn More
              </button>
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
              <button className="btn_more" onClick={this.handleBehavioralModal}>
                Learn More
              </button>
            </div>
          </div>
          <ReactModal isOpen={showModal} style={customStyles}>
            {this.modalToShow(title)}
            <button className="btn_more" onClick={this.handleCloseModal}>
              Close
            </button>
          </ReactModal>
        </div>
      </div>
    );
  }
}

export default Research;
