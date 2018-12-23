import React from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import logo_horizontal from "../assets/cgw_logo+text+horizontal.png";
import Home from "../home";

import "./routes.css";

const Routes = () => {
  return (
    <div>
      <Router>
        <div>
          <div className="nav">
            <Link to="/">
              <img className="logo" src={logo_horizontal} alt="logo" />
            </Link>
            <ul className="navbar">
              <li>
                <a className="navlinks" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="navlinks" href="#principles">
                  Principles
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

          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Routes;
