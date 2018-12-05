import React, {Component} from "react";
import ReactModal from "react-modal";
import "./research.css";

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
      return "Index Investing huhu";
    } else if (title === "Efficient Markets") {
      return "Investors spend $100 billion per year trying to beat the market. Decades of data prove index strategies do better over the long term.We have developed a product that addresses this issue and lets you take advantage of Chicago-style investing.";
    } else if (title === "Behavioral Finance") {
      return "Bahvioral Finance huhu";
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
          <ReactModal isOpen={showModal} className="modal">
            {this.modalToShow(title)}
            <button onClick={this.handleCloseModal}>Close</button>
          </ReactModal>
        </div>
      </div>
    );
  }
}

export default Research;
