import React from "react";
import { HashRouter as Router, NavLink, Redirect } from "react-router-dom";

const Routes = () => {
  return (
    <div>
      <Router>
        <div>
          <h1>chicago global wealth</h1>
          <ul className="navbar">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/offerings">Offerings</NavLink></li>
            <li><NavLink to="/team">Team</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
      </Router>
    </div>
  )
}

export default Routes