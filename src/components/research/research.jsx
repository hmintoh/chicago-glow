import React, {Component} from "react";
import ReactModal from "react-modal";
import eit from "./ExcessiveInvestorTrading.png";
import df from "./DividendsFallacy.png";
import rma from "./RollingMentalAccounts.png";
import "./research.css";

ReactModal.setAppElement("#root");

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

const researchBlurb = [
  {
    title: "Excessive Investor Trading",
    blurb:
      "Both individual investors and mutual funds do not view each stock individually, they compare positions across their portfolio and sell their biggest winners and losers.",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2503987",
    details:
      "I document a new stylized fact about how investors trade assets: individuals are more likely to sell the extreme winning and extreme losing positions in their portfolio (“the rank effect”). This effect is not driven by firm-specific information, holding period or the level of returns itself, but is associated with the salience of extreme portfolio positions. The rank effect is exhibited by both retail traders and mutual fund managers. The effect indicates that trades in a given stock depend on how it compares to other positions in an investor’s portfolio.",
    image: eit
  },
  {
    title: "Dividends Fallacy",
    blurb:
      "Investors trade as if they consider dividends and capital gains in separate mental accounts, without fully appreciating that dividends come at the expense of price decreases - the free dividends fallacy.",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2876373",
    details:
      "Many individual investors, mutual funds and institutions trade as if dividends and capital gains are disconnected attributes, not fully appreciating that dividends result in price decreases. Behavioral trading patterns (e.g. the disposition effect) are driven by price changes instead of total returns. Investors rarely reinvest dividends, and trade as if they are a separate, stable income stream. Analysts fail to account for the effect of dividends on price, leading to optimistic price forecasts for dividend-paying stocks. Demand for dividends is systematically higher in periods of low interest rates and poor market performance, leading to lower returns for dividend-paying stocks.",
    image: df
  },
  {
    title: "Rolling Mental Accounts Fallacy",
    blurb:
      "Mental accounts are not always closed when an investor sells a stock - a sale does not always conclude an investing episode. Instead, investors may 'roll' an account from one asset to another, by selling the original asset and buying another within a short period of time.",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2653929",
    details:
      "When investors sell one asset and quickly buy another (“reinvestment days”), their trades suggest the original mental account is not closed, but is instead rolled into the new asset. Investors display a rolled disposition effect, selling the new position when its value exceeds the investment in the original position. On reinvestment days, investors display no disposition effect (consistent with no disutility from realizing a loss) and make better selling decisions. Mutual funds exhibit a larger disposition effect when outflows prevent them from rolling accounts. Using a laboratory experiment, we show that reinvestment causally reduces the disposition effect and improves trading.",
    image: rma
  }
];

ReactModal.setAppElement("#root");

class Research extends Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false, title: ""};
  }

  handleOpenModal = e => {
    this.setState({showModal: true, title: e.target.name});
  };

  handleCloseModal = () => {
    this.setState({showModal: false});
  };

  modalToShow = title => {
    if (title === "Excessive Investor Trading") {
      return (
        <div className="animated slow fadeIn modal-grid">
          <div className="modal-item">
            <h3>{title}</h3>
            <p>{researchBlurb[0].details}</p>
          </div>
          <div className="modal-item">
            <img
              src={researchBlurb[0].image}
              className="modal_item research_images"
              alt="eit"
            />
          </div>
          <div className="modal-item">
            <a
              className="learn-more"
              href={researchBlurb[0].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn_more">See Full Paper</button>
            </a>
          </div>
        </div>
      );
    } else if (title === "Dividends Fallacy") {
      return (
        <div className="animated slow fadeIn modal-grid">
          <div className="modal-item">
            <h3>{title}</h3>
            <p>{researchBlurb[1].details}</p>
          </div>
          <div className="modal-item">
            <img
              src={researchBlurb[1].image}
              className="research_images"
              alt="df"
            />
          </div>
          <div className="modal-item">
            <a
              className="learn-more"
              href={researchBlurb[1].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn_more">See Full Paper</button>
            </a>
          </div>
        </div>
      );
    } else if (title === "Rolling Mental Accounts Fallacy") {
      return (
        <div className="animated slow fadeIn modal-grid">
          <div className="modal-item">
            <h3>{title}</h3>
            <p>{researchBlurb[2].details}</p>
          </div>
          <div className="modal-item">
            <img
              src={researchBlurb[2].image}
              className="research_images"
              alt="rma"
            />
          </div>
          <div className="modal-item">
            <a
              className="learn-more"
              href={researchBlurb[2].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn_more">See Full Paper</button>
            </a>
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
            {researchBlurb.map((item, key) => (
              <div key={key} className="services_item">
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.blurb}</p>
                </div>
                <div className="research_btns_container">
                  <button
                    name={item.title}
                    className="btn_more"
                    onClick={this.handleOpenModal}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          <ReactModal isOpen={showModal} style={customStyles}>
            {this.modalToShow(title)}
            <button className="btn_close" onClick={this.handleCloseModal}>
              Close
            </button>
          </ReactModal>
        </div>
      </div>
    );
  }
}

export default Research;
