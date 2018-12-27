import React, {Component} from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
import logo_horizontal from "../assets/cgw_logo+text+horizontal.png";
import Home from "../home";
import "./routes.css";

let lastScrollTop = 0;

class Routes extends Component {
  constructor() {
    super();
    this.state = {showMenu: true};
  }

  componentDidMount = () => {
    window.innerWidth < 500 &&
      window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = event => {
    const currentScrollTop = window.pageYOffset;

    if (currentScrollTop > lastScrollTop) {
      document.getElementById("nav").style.display = "none";
    } else {
      document.getElementById("nav").style.display = "block";
    }
    lastScrollTop = currentScrollTop;
  };

  render() {
    return (
      <div>
        <Router>
          <div>
            <div
              id="nav"
              className="animated fadeInDown"
              onScroll={this.handleScroll}
            >
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

            <Home />
          </div>
        </Router>
      </div>
    );
  }
}

export default Routes;
