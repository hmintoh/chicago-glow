import React from "react";
import Carousel from "react-slick";
import Ivan from "../assets/Ivan_Chelebiev.png";
import Ben from "../assets/Ben_Charoenwong.png";
import "./team.css";

const Team = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <div className="secB">
        <div className="container team-grid-item-a">
          <h2>Team</h2>
          <Carousel {...settings}>
            <div className="card_content">
              <img className="card_image" src={Ivan} alt="Ivan" />
              <h2>Ivan Chelebiev</h2>
              <h4>
                <i>Portfolio Manager</i>
              </h4>
              <p>
                Mr. Ivan Chelebiev has nearly 20 years' experience in asset
                management. His career began on Wall Street in 1999 and took him
                to Europe and Asia in various portfolio management and research
                capacities, spanning equities, bonds, and their derivatives. He
                helped start the hedge fund research group at Morgan Stanley,
                which led to the creation of indices and portfolios that
                stimulated the acceptance of alternative investments in
                institutional portfolios. He conducted due diligence and
                quantitative analysis on hundreds of hedge funds. He was one of
                the principal authors of MSCI’s Hedge Fund Index Methodology.
              </p>
              <p>
                He evaluated and directed investments in relative value hedge
                funds while at Financial Risk Management LLC, ultimately helping
                to manage over US$700 million. As a portfolio manager with LGT
                Capital Partners, he ran top-down sector allocation and
                investment selection for a US$1.2 billion hedge fund portfolio.
                After the fall of Lehman Brothers in 2008, he launched a private
                investment partnership that made direct investments across three
                dimensions: equity, credit, and volatility.
              </p>
              <p>
                Mr. Chelebiev earned two master’s degrees from the University of
                Chicago with a concentration in finance. He also holds a
                bachelor's degree Summa Cum Laude from Oklahoma City University.
              </p>
            </div>
            <div className="card_content">
              <img className="card_image" src={Ben} alt="Ben" />
              <h2>Ben Charoenwong</h2>
              <h4>
                <i>Head of Research</i>
              </h4>
              <p>
                Ben is an assistant professor of finance at the National
                University of Singapore and teaches International Financial
                Management. He has worked for at Citadel Investment Group,
                teaching research skills and financial econometrics to new
                quantitative researchers and developers. He has also advised LEK
                Consulting on applying machine learning techniques to capital
                budgeting.
              </p>
              <p>
                He completed a PhD in Finance and MBA at the University of
                Chicago Booth School of Business, where he received the Fischer
                Black PhD Fellowship, Eugene Fama PhD Fellowship, and the
                inaugural recipient of the Fama-Miller Liew Research Fellowship.
                Prior to that, he earned with a bachelor’s degree of science in
                Honors Economics, Honors Statistics, and Financial Mathematics
                with Highest Distinction from the University of Michigan - Ann
                Arbor.
              </p>
            </div>
          </Carousel>
          <div className="team-grid-item-b" />
        </div>
      </div>
    </div>
  );
};

export default Team;
