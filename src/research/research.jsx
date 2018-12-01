import React from "react";
import "./research.css";

const Research = () => {
  return (
    <div id="research" className="secA">
      <div className="container">
        <h3>Research</h3>
        <div className="services_grid">
          <div className="services_item">
            <h3>Low Fees</h3>
            <p>
              Investors pay over $100 billion a year in management fees. Fee
              reduction is the purest outperformance that funds can deliver to
              investors. Our quantitative investment approach that allows us to
              analyze over 30,000 stocks globally at minimal costs without
              sacrificing performance.
            </p>
          </div>
          <div className="services_item">
            <h3>Long Term Efficient</h3>
            <p>
              Over the long term markets reflect fundamentals, but even Eugene
              Fama does not believe that markets are efficient always. Our
              disciplined strategies are refined from Chicago research based on
              over 50 years of data across over 20 countries to take advantage
              of both short-term errors and long-term corrections.
            </p>
          </div>
          <div className="services_item">
            <h3>Behavioral Finance</h3>
            <p>
              Individual investors tend to chase returns and overreact to
              short-term news. We exploit these short-term errors in the market
              while striving to reduce behavioral biases among our own investors
              through the application of Richard Thaler’s principles using
              nudges and sludges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
