import React from "react";
import "./advisory.css";

const AdvisoryBoard = () => {
  const advisoryList = [
    {name: "Michael Gibbs", role: "Governance"},
    {name: "Sam Hartzmark", role: "Behavioral Finance"},
    {name: "Kenneth Ho", role: "Business Strategy"},
    {name: "Alan Kwan", role: "Quantitative Strategies"},
    {name: "Gaurav Rastogi", role: "Quantitative Strategies"},
    {name: "Laurence Siegel", role: "Asset Allocation"}
  ];

  return (
    <div className="">
      <div className="">
        <h2>Advisory Board</h2>
        <div className="grid">
          {advisoryList.map(person => (
            <div className="grid-item">
              <h3>{person.name}</h3>
              <p>{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvisoryBoard;
