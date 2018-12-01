import React from "react";
import {HashRouter as Router} from "react-router-dom";
import logo_horizontal from "../assets/cgw_logo+text+horizontal.png";
import "./routes.css";

const Routes = () => {
  return (
    <div>
      <Router>
        <div className="nav">
          <img className="logo" src={logo_horizontal} alt="logo" />
          <ul className="navbar">
            <li>
              <a className="navlinks" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="navlinks" href="#team">
                Team
              </a>
            </li>
            <li>
              <a className="navlinks" href="#research">
                Research
              </a>
            </li>
            <li>
              <a className="navlinks" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </Router>
    </div>
  );
};

export default Routes;
