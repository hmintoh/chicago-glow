import React from "react";
import "./research.css";

const Research = () => {
  return (
    <div className="secA">
      <div className="container">
        <h2>Research</h2>
        <div className="services_grid">
          <div className="services_item">
            <h3>Index Investing</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="services_item">
            <h3>Efficient Markets</h3>
            <button className="btn_readMore">READ MORE</button>
          </div>
          <div className="services_item">
            <h3>Behavioral Finance</h3>
            <button className="btn_readMore1">READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
