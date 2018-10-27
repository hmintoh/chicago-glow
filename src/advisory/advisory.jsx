import React from "react";
import "./advisory.css";

const AdvisoryBoard = () => {
  return (
    <div className="secA">
      <div className="container">
        <h2>Advisory Board</h2>
        <div className="grid">
          <div className="grid-item">
            <h3>Michael Gibbs</h3>
            <p>Governance</p>
          </div>
          <div className="grid-item">
            <h3>Samuel Hartzmark</h3>
            <p>Behavioral Finance</p>
          </div>
          <div className="grid-item">
            <h3>Kenneth Ho</h3>
            <p>Business Strategy</p>
          </div>
          <div className="grid-item">
            <h3>Alan Kwan</h3>
            <p>Quantitative Strategies</p>
          </div>
          <div className="grid-item">
            <h3>Gaurav Rastogi</h3>
            <p>Quantitative Strategies</p>
          </div>
          <div className="grid-item">
            <h3>Laurence Siegel</h3>
            <p>Asset Allocation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvisoryBoard;
