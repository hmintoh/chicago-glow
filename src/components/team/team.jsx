import React from "react";
import Carousel from "react-slick";
import Ivan from "../../assets/Ivan_Chelebiev.png";
import Ben from "../../assets/Ben_Charoenwong.png";
import "./team.css";

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2500,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
};

const profiles = [
  {
    image: Ivan,
    alt: "Ivan",
    name: "Ivan Chelebiev",
    title: "Portfolio Manager",
    description: [
      "Mr. Ivan Chelebiev has nearly 20 years' experience in asset management. His career began on Wall Street in 1999 and took himto Europe and Asia in various portfolio management and researchcapacities, spanning equities, bonds, and their derivatives. Hehelped start the hedge fund research group at Morgan Stanley,which led to the creation of indices and portfolios thatstimulated the acceptance of alternative investments ininstitutional portfolios. He conducted due diligence andquantitative analysis on hundreds of hedge funds. He was one ofthe principal authors of MSCI’s Hedge Fund Index Methodology.",
      "He evaluated and directed investments in relative value hedge funds while at Financial Risk Management LLC, ultimately helping to manage over US$700 million. As a portfolio manager with LGT apital Partners, he ran top-down sector allocation an investment selection for a US$1.2 billion hedge fund portfolio After the fall of Lehman Brothers in 2008, he launched a privat investment partnership that made direct investments across thre dimensions: equity, credit, and volatility.",
      "Mr. Chelebiev earned two master’s degrees from the University of Chicago with a concentration in finance. He also holds a bachelor's degree Summa Cum Laude from Oklahoma City University."
    ]
  },
  {
    image: Ben,
    alt: "Ben",
    name: "Ben Charoenwong, PhD",
    title: "Head of Research",
    description: [
      "Ben is an assistant professor of finance at the National University of Singapore and teaches International Financial Management. He has worked for at Citadel Investment Group, teaching research skills and financial econometrics to new quantitative researchers and developers. He has also advised LEK Consulting on applying machine learning techniques to capital budgeting.",
      "He completed a PhD in Finance and MBA at the University of Chicago Booth School of Business, where he received the Fischer Black PhD Fellowship, Eugene Fama PhD Fellowship, and the inaugural recipient of the Fama-Miller Liew Research Fellowship. Prior to that, he earned with a bachelor’s degree of science in Honors Economics, Honors Statistics, and Financial Mathematics with Highest Distinction from the University of Michigan - Ann Arbor."
    ]
  }
];

const Team = () => {
  return (
    <div id="team" className="secB">
      <div className="container team-grid-item-a">
        <h2>Team</h2>
        <Carousel {...settings}>
          {profiles.map(profile => {
            return (
              <div className="card_content">
                <img
                  className="card_image"
                  src={profile.image}
                  alt={profile.alt}
                />
                <h2>{profile.name}</h2>
                <h4>{profile.title}</h4>

                {profile.description.map(paragraph => (
                  <p>{paragraph}</p>
                ))}
              </div>
            );
          })}
        </Carousel>
        <div className="team-grid-item-b" />
      </div>
    </div>
  );
};

export default Team;
