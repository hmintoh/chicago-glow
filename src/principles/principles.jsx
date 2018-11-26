import React from "react";
import "./principles.css";

const Principles = () => {
  return (
    <div className="secA">
      <div className="container">
        <h3>Principles</h3>
        <div className="services_grid">
          <div className="services_item">
            <h3>Index Investing</h3>
            <p>
              Fewer than 15% of large-cap funds beat the S&P 500 in the last 10
              years. Poor performance brought spotlight on fees, which became
              hard to justify. Many active managers are really closet indexers,
              holding most stocks in their benchmarks.
            </p>
            <button className="btn_more">LEARN MORE</button>
          </div>
          <div className="services_item">
            <h3>Efficient Markets</h3>
            <p>
              Investors spend $100 billion per year trying to beat the market.
              Decades of data prove index strategies do better over the long
              term. We have developed a product that addresses this issue and
              lets you take advantage of Chicago-style investing.
            </p>
            <button className="btn_more">LEARN MORE</button>
          </div>
          <div className="services_item">
            <h3>Behavioral Finance</h3>
            <p>
              Due to attempts at market timing and poor behavioral finance
              choices (selling after a market correction), the average investor
              actually underperforms the overall market.
            </p>
            <button className="btn_more">LEARN MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principles;
