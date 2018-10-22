import React from "react";
import { HashRouter as Router, NavLink, Redirect } from "react-router-dom";
import logo from "../assets/cgw logo.png";
import "./routes.css";

const Routes = () => {
  return (
    <div>
      <Router>
        <div>
          <img className="logo" src={logo} alt="logo" />
          <ul className="navbar">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/offerings">Offerings</NavLink></li>
            <li><NavLink to="/team">Team</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><a href="https://www.chicagoglobalwealth.com/">BLOG</a></li>
          </ul>
        </div>
      </Router>
    </div >
  )
}

export default Routes