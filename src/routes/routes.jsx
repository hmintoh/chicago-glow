import React from "react";
import {HashRouter as Router, NavLink, Redirect} from "react-router-dom";
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
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/offerings">Offerings</NavLink>
            </li>
            <li>
              <NavLink to="/team">Team</NavLink>
            </li>
            <li>
              <NavLink to="/advisory">Advisory</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <a href="https://www.chicagoglobalwealth.com/">BLOG</a>
            </li>
          </ul>
        </div>
      </Router>
    </div>
  );
};

export default Routes;
