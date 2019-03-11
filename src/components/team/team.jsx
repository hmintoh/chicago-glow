import React, {Component} from "react";
import ReactModal from "react-modal";
import ben from "./Ben_Charoenwong.png";
import ivan from "./Ivan_Chelebiev.png";
import rachel from "./Rachel Provest.png";
import davidA from "./DavidAbuaf.png";
import davidN from "./DavidNichtenhauser.png";
import "./team.css";

const teamProfiles = [
  {
    image: ivan,
    alt: "ivan",
    name: "Ivan Chelebiev",
    role: "Portfolio Manager"
  },
  {
    image: ben,
    alt: "ben",
    name: "Ben Charoenwong, PhD",
    role: "Head of Research"
  },
  {
    image: davidA,
    alt: "davidA",
    name: "David Abuaf",
    role: "Quantitative Strategies"
  },
  {
    image: rachel,
    alt: "rachel",
    name: "Rachel Provest",
    role: "Business Development"
  },
  {
    image: davidN,
    alt: "davidN",
    name: "David Nichtenhauser",
    role: "Business Development"
  }
];

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

ReactModal.setAppElement("#root");

class Team extends Component {
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
    if (activePerson === "Ivan Chelebiev") {
      return (
        <div className="animated slow fadeIn">
          <h3>{activePerson}</h3>
          <div className="team-writeup">
            <p>
              Mr. Ivan Chelebiev has nearly 20 years' experience in asset
              management. His career began on Wall Street in 1999 and took himto
              Europe and Asia in various portfolio management and
              researchcapacities, spanning equities, bonds, and their
              derivatives. Hehelped start the hedge fund research group at
              Morgan Stanley,which led to the creation of indices and portfolios
              thatstimulated the acceptance of alternative investments
              ininstitutional portfolios. He conducted due diligence
              andquantitative analysis on hundreds of hedge funds. He was one
              ofthe principal authors of MSCI’s Hedge Fund Index Methodology.
            </p>
            <p>
              He evaluated and directed investments in relative value hedge
              funds while at Financial Risk Management LLC, ultimately helping
              to manage over US$700 million. As a portfolio manager with LGT
              apital Partners, he ran top-down sector allocation an investment
              selection for a US$1.2 billion hedge fund portfolio After the fall
              of Lehman Brothers in 2008, he launched a privat investment
              partnership that made direct investments across thre dimensions:
              equity, credit, and volatility.
            </p>
            <p>
              Mr. Chelebiev earned two master’s degrees from the University of
              Chicago with a concentration in finance. He also holds a
              bachelor's degree Summa Cum Laude from Oklahoma City University.
            </p>
          </div>
        </div>
      );
    } else if (activePerson === "Ben Charoenwong, PhD") {
      return (
        <div className="animated slow fadeIn">
          <h3>{activePerson}</h3>
          <div className="team_writeup">
            <p>
              Ben is an assistant professor of finance at the National
              University of Singapore and teaches International Financial
              Management. He has worked for at Citadel Investment Group,
              teaching research skills and financial econometrics to new
              quantitative researchers and developers. He has also advised LEK
              Consulting on applying machine learning techniques to capital
              budgeting,
            </p>
            <p>
              He completed a PhD in Finance and MBA at the University of Chicago
              Booth School of Business, where he received the Fischer Black PhD
              Fellowship, Eugene Fama PhD Fellowship, and the inaugural
              recipient of the Fama-Miller Liew Research Fellowship. Prior to
              that, he earned with a bachelor’s degree of science in Honors
              Economics, Honors Statistics, and Financial Mathematics with
              Highest Distinction from the University of Michigan - Ann Arbor.
            </p>
          </div>
        </div>
      );
    } else if (activePerson === "Rachel Provest") {
      return (
        <div className="animated slow fadeIn">
          <h3>{activePerson}</h3>
          <div className="team_writeup">
            <p>
              Rachel Provest was the Managing Director of BLG Capital Advisors
              Asia, a Singapore based subsidiary of a US head-quartered
              private-equity firm, sourcing and advising on global investments
              for a single family. Prior to BLG, Ms. Provest was a Director of
              Dempsey Capital, providing financial and operational support to
              new and established Asian investment funds and for six years, ran
              Finance and Operations for Dragon Capital, a leading
              Vietnam-focused investment manager. Rachel qualified as a
              Chartered Accountant in 2000, before joining Deutsche Bank’s
              Global Markets in London.
            </p>
            <p>
              She earned a Joint MA with Honours in Political Science and
              French, from the University of Edinburgh, and received her MBA
              from the University of Chicago Booth School of Business.
            </p>
          </div>
        </div>
      );
    } else if (activePerson === "David Abuaf") {
      return (
        <div className="animated slow fadeIn">
          <h3>{activePerson}</h3>
          <div className="team_writeup">
            <p>
              David currently serves as the Director of Investments at Forman
              Investment Services, specializing in designing and building stock
              and mutual fund portfolios. Previously David was the Chief
              Investment Officer at Hefty Wealth Partners, where he was
              responsible for all investment decisions, trading, and interaction
              between his teams and advisors and the back-office. He has also
              spent time as an Equity Analyst, Fund of Hedge Funds Analyst, and
              a Fixed Income Derivatives Trader.
            </p>
            <p>
              A graduate of the University of Chicago, David holds both a
              Bachelor of Arts and a Master of Business Administration degree.
              He is a member of both the CFA Institute and the CFA Society of
              Chicago, and holds the Chartered Financial Analyst designation.
              David has appeared on Bloomberg News and Fox News Business and has
              contributed to Barrons and the Wall Street Journal, and other
              financial publications.
            </p>
          </div>
        </div>
      );
    } else if (activePerson === "David Nichtenhauser") {
      return (
        <div className="animated slow fadeIn">
          <h3>{activePerson}</h3>
          <div className="team_writeup">
            <p>
              A seasoned professional with 30 years’ experience in the financial
              services industry, David’s career spans trading, asset management,
              investor relations and operations. He began his career in 1986 as
              a commodities dealer at Merrill Lynch in New York, followed by
              nearly a decade as a portfolio manager, developing and executing
              proprietary quantitative strategies for hedge funds. In 2004,
              David became an alternative asset manager role at ABN Amro, where
              he managed asset allocations to hedge funds and structured
              principal-protected notes. At LGT Capital Partners, he was jointly
              responsible for managing the bank’s $2.2 billion allocation to
              quantitative and systematic hedge funds. In 2009, David joined the
              Abu Dhabi Investment Authority as a portfolio manager in the
              wealth fund’s Alternative Investment Department.
            </p>
            <p>
              In 2013, David led the marketing and compliance efforts at
              Flyberry Capital, a start-up quantitative macro hedge fund that
              employed big data technologies to exploit price dislocations in
              futures markets. When Flyberry transitioned to a technology
              company in 2015, David remained as its Chief Operation Officer
              managing teams in both Boston and Taiwan. David is a graduate of
              Cornell University, where he received a B.S. degree in Applied
              Economics.
            </p>
          </div>
        </div>
      );
    }
  };

  render() {
    const {showModal, activePerson} = this.state;

    return (
      <div id="team" className="secB">
        <div className="container">
          <h2>Team</h2>
          <div className="team-grid">
            {teamProfiles.map((person, key) => (
              <div key={key} className="grid-item">
                <h3>
                  <img
                    src={person.image}
                    className="team_images"
                    alt={person.alt}
                  />
                  <a href="##" onClick={this.openModal} value={person.name}>
                    {person.name}
                  </a>
                </h3>
                <p>{person.role}</p>
              </div>
            ))}
          </div>
          <ReactModal isOpen={showModal} style={customStyles}>
            {this.modalToShow(activePerson)}
            <button className="btn_close" onClick={this.closeModal}>
              Close
            </button>
          </ReactModal>
        </div>
      </div>
    );
  }
}

export default Team;

// import React from "react";
// import Carousel from "react-slick";
// import Ivan from "../../assets/Ivan_Chelebiev.png";
// import Ben from "../../assets/Ben_Charoenwong.png";
// import "./team.css";

// const settings = {
//   dots: true,
//   infinite: true,
//   autoplay: true,
//   autoplaySpeed: 2500,
//   speed: 1000,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false
// };

// const profiles = [
//   {
//     image: Ivan,
//     alt: "Ivan",
//     name: "Ivan Chelebiev",
//     title: "Portfolio Manager",
//     description: [
//       "Mr. Ivan Chelebiev has nearly 20 years' experience in asset management. His career began on Wall Street in 1999 and took himto Europe and Asia in various portfolio management and researchcapacities, spanning equities, bonds, and their derivatives. Hehelped start the hedge fund research group at Morgan Stanley,which led to the creation of indices and portfolios thatstimulated the acceptance of alternative investments ininstitutional portfolios. He conducted due diligence andquantitative analysis on hundreds of hedge funds. He was one ofthe principal authors of MSCI’s Hedge Fund Index Methodology.",
//       "He evaluated and directed investments in relative value hedge funds while at Financial Risk Management LLC, ultimately helping to manage over US$700 million. As a portfolio manager with LGT apital Partners, he ran top-down sector allocation an investment selection for a US$1.2 billion hedge fund portfolio After the fall of Lehman Brothers in 2008, he launched a privat investment partnership that made direct investments across thre dimensions: equity, credit, and volatility.",
//       "Mr. Chelebiev earned two master’s degrees from the University of Chicago with a concentration in finance. He also holds a bachelor's degree Summa Cum Laude from Oklahoma City University."
//     ]
//   },
//   {
//     image: Ben,
//     alt: "Ben",
//     name: "Ben Charoenwong, PhD",
//     title: "Head of Research",
//     description: [
//       "Ben is an assistant professor of finance at the National University of Singapore and teaches International Financial Management. He has worked for at Citadel Investment Group, teaching research skills and financial econometrics to new quantitative researchers and developers. He has also advised LEK Consulting on applying machine learning techniques to capital budgeting.",
//       "He completed a PhD in Finance and MBA at the University of Chicago Booth School of Business, where he received the Fischer Black PhD Fellowship, Eugene Fama PhD Fellowship, and the inaugural recipient of the Fama-Miller Liew Research Fellowship. Prior to that, he earned with a bachelor’s degree of science in Honors Economics, Honors Statistics, and Financial Mathematics with Highest Distinction from the University of Michigan - Ann Arbor."
//     ]
//   }
// ];

// const Team = () => {
//   return (
//     <div id="team" className="secB">
//       <div className="container team-grid-item-a">
//         <h2>Team</h2>
//         <Carousel {...settings}>
//           {profiles.map(profile => {
//             return (
//               <div className="card_content">
//                 <img
//                   className="card_image"
//                   src={profile.image}
//                   alt={profile.alt}
//                 />
//                 <h2>{profile.name}</h2>
//                 <h4>{profile.title}</h4>

//                 {profile.description.map(paragraph => (
//                   <p>{paragraph}</p>
//                 ))}
//               </div>
//             );
//           })}
//         </Carousel>
//         <div className="team-grid-item-b" />
//       </div>
//     </div>
//   );
// };

// export default Team;
