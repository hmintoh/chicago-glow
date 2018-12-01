import React, {Component} from "react";
import ReactModal from "react-modal";
import "./principles.css";

class Principles extends Component {
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
      <div id="principles" className="secA">
        <div className="container">
          <h2>Principles</h2>
          <div className="services_grid">
            <div className="services_item">
              <h3>Index Investing</h3>
              <p>
                Fewer than 15% of large-cap funds beat the S&P 500 in the last
                10 years. Poor performance brought spotlight on fees, which
                became hard to justify. Many active managers are really closet
                indexers, holding most stocks in their benchmarks.
              </p>
              <button className="btn_more" onClick={this.handleIndexModal}>
                Learn More
              </button>
            </div>
            <div className="services_item">
              <h3>Efficient Markets</h3>
              <p>
                Investors spend $100 billion per year trying to beat the market.
                Decades of data prove index strategies do better over the long
                term. We have developed a product that addresses this issue and
                lets you take advantage of Chicago-style investing.
              </p>
              <button className="btn_more" onClick={this.handleEfficientxModal}>
                Learn More
              </button>
            </div>
            <div className="services_item">
              <h3>Behavioral Finance</h3>
              <p>
                Due to attempts at market timing and poor behavioral finance
                choices (selling after a market correction), the average
                investor actually underperforms the overall market.
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

export default Principles;
