import React, {Component} from "react";
import ReactModal from "react-modal";
import mg from "./MichaelGibbs.jpg";
import sh from "./SamuelHartzmark.jpg";
import kh from "./KennyHo.jpg";
import ak from "./AlanKwan.jpg";
import gr from "./GauravRastogi-LEFT.jpg";
import ls from "./LarrySiegel.jpg";
import "./advisory.css";

const advisoryList = [
  {
    name: "Michael Gibbs",
    role: "Governance"
  },
  {
    name: "Sam Hartzmark",
    role: "Behavioral Finance"
  },
  {
    name: "Kenneth Ho",
    role: "Business Strategy"
  },
  {
    name: "Alan Kwan",
    role: "Quantitative Strategies"
  },
  {
    name: "Gaurav Rastogi",
    role: "Quantitative Strategies"
  },
  {
    name: "Laurence Siegel",
    role: "Asset Allocation"
  }
];

const customStyles = {
  overlay: {
    zIndex: 2
  }
};

class AdvisoryBoard extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      activePerson: ""
    };
  }

  openModal = event => {
    this.setState({
      showModal: true,
      activePerson: event.target.getAttribute("value")
    });
  };

  closeModal = () => {
    this.setState({showModal: false, activePerson: ""});
  };

  modalToShow = activePerson => {
    if (activePerson === "Michael Gibbs") {
      return (
        <div className="animated slow fadeIn">
          <img src={mg} className="advisory_images" alt="mg" />
          <h3>{activePerson}</h3>
          <p>
            Michael studies the economics of human resources and organizational
            design. He is co-author (with Edward Lazear) of the leading textbook
            in the field, Personnel Economics in Practice. The 3rd edition was
            published in 2014. It has been translated into Japanese, Korean,
            Bulgarian and Spanish, and a Chinese edition is forthcoming. Gibbs's
            research has been published in the Quarterly Journal of Economics,
            Review of Economics & Statistics, Industrial & Labor Relations
            Review, Accounting Review, and other journals. Professor Gibbs is a
            Research Fellow of the Center for the Study of Labor (IZA) and the
            Institute for Compensation Studies. From 2012-2015, he was Faculty
            Director of Booth’s Executive MBA program. Michael earned an AB and
            AM in 1984 and a Ph.D. in economics in 1989, all from the University
            of Chicago.
          </p>
        </div>
      );
    } else if (activePerson === "Sam Hartzmark") {
      return (
        <div className="animated slow fadeIn">
          <img src={sh} className="advisory_images" alt="sh" />
          <h3>{activePerson}</h3>
          <p>
            Samuel is an assistant professor of finance at the University of
            Chicago Booth School of Business. He studies asset pricing and
            behavioral finance. His research has appeared in the Journal of
            Finance, Review of Financial Studies, the Journal of Financial
            Economics, the Quarterly Journal of Finance, and the Review of Asset
            Pricing Studies. He has received a number of prestigious awards
            including the 2016 AQR Insight Award, the 2017 Charles Brandes
            Prize, Best Paper in the Review of Asset Pricing Studies 2016, 2nd
            prize Fama-DFA award for best paper in asset pricing research in the
            Journal of Financial Economics 2015, the Hillcrest Behavioral
            Finance Award, the UBS Global Asset Management Award, the Michael J.
            Barclay young scholar award and he was a finalist for the 2014 AQR
            Insight award. His work has been covered by a variety of media
            outlets including CNBC, Forbes, the Wall Street Journal, and
            Bloomberg among others. Samuel holds a Ph.D. from Marshall School of
            Business at the University of Southern California in 2014, an M.B.A.
            from University of Chicago Booth School of Business in 2007 and a BA
            in mathematics/economics (summa cum laude) with a double major in
            religion from Emory University in 2004.
          </p>
        </div>
      );
    } else if (activePerson === "Kenneth Ho") {
      return (
        <div className="animated slow fadeIn">
          <img src={kh} className="advisory_images" alt="kh" />
          <h3>{activePerson}</h3>
          <p>
            Kenny is a Managing Partner and Founder of Carret Private Capital,
            an Asian multi-family office focusing on tailored, premium solutions
            for ultra high net work clients in the emerging markets. Kenny has a
            wealth of experience spanning over 20 years at Julius Baer, Credit
            Suisse, Merrill Lynch, Salomon Brothers, and McKinsey & Co in
            virtually all facets of finance from corporate advisories through
            investment management. Kenny completed his M.B.A. in Accounting and
            Finance at the University of Chicago Booth School of Business in
            1993 and a Bachelors in Business Administration at James Madison
            University in 1989, and currently also serves on the Chicago Booth
            Global Advisory Board.
          </p>
        </div>
      );
    } else if (activePerson === "Alan Kwan") {
      return (
        <div className="animated slow fadeIn">
          <img src={ak} className="advisory_images" alt="ak" />
          <h3>{activePerson}</h3>
          <p>
            Alan is an assistant professor of finance at Hong Kong University
            where he teaches Quantitative Trading and Big Data Analysis in
            Finance at the Masters level. His research is in empirical corporate
            finance and investments, with a specialization in using alternative
            data. He received his PhD from the Johnson School of Management in
            2017 at Cornell University and his BA from Dartmouth College in
            2009. Between school, he worked at DC Energy as a quantitative
            trader, Microsoft as a software developer, and Bridgewater
            Associates as a technology specialist on the research team.
          </p>
        </div>
      );
    } else if (activePerson === "Gaurav Rastogi") {
      return (
        <div className="animated slow fadeIn">
          <img src={gr} className="advisory_images" alt="gr" />
          <h3>{activePerson}</h3>
          <p>
            Gaurav is the CEO of Kuvera.in, an online financial advisory service
            based out of Bangalore, India and has over 15 years of experience in
            investing in equity and debt markets. Prior to founding Kuvera,
            Gaurav worked at Morgan Stanley in New York City and Hong Kong,
            where he built expertise in developing and implementing proprietary
            quantitative investment strategies for credit and equity. He
            completed an MBA in Finance at Economics from the University of
            Chicago Booth School of Business in 2006, where he was a Siebel
            Scholar. He completed his undergraduate degree in Computer Science
            from IIT Delhi in 2000, where he was a SAIL Scholar.
          </p>
        </div>
      );
    } else if (activePerson === "Laurence Siegel") {
      return (
        <div className="animated slow fadeIn">
          <img src={ls} className="advisory_images" alt="ls" />
          <h3>{activePerson}</h3>
          <p>
            Larry is the Gary P. Brinson director of research at the CFA
            Institute Research Foundation. Prior to that he was director of
            research at the Ford Foundation’s investment division for 15 years.
            Larry began his career at Ibbotson Associates in 1979 and left as a
            Managing Director after 15 years. He specializes in asset management
            and investment consulting and has served on various boards as both
            an adviser and a director.. He has also served on the editorial
            board of the Financial Analysts Journal and currently serves on the
            editorial board of the Journal of Portfolio Management and Journal
            of Investing. Larry completed his Bachelor of Arts with Honors at
            the University of Chicago in 1975 and received an MBA in finance at
            the University of Chicago Booth School of Business in 1977.
          </p>
        </div>
      );
    }
  };

  render() {
    const {showModal, activePerson} = this.state;

    return (
      <div className="secB">
        <div className="container">
          <h2>Advisory Board</h2>
          <div className="advisory-grid">
            {advisoryList.map(person => (
              <div className="grid-item">
                <h3>
                  <a onClick={this.openModal} value={person.name}>
                    {person.name}
                  </a>
                </h3>
                <p>{person.role}</p>
              </div>
            ))}
          </div>
          <ReactModal isOpen={showModal} style={customStyles}>
            {this.modalToShow(activePerson)}
            <button className="btn_more" onClick={this.closeModal}>
              Close
            </button>
          </ReactModal>
        </div>
      </div>
    );
  }
}

export default AdvisoryBoard;
