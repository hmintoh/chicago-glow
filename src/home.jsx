import React from "react";
import Jumbotron from "./jumbotron/jumbotron.jsx";
import About from "./about/about.jsx";
import Principles from "./principles/principles.jsx";
import Team from "./team/team.jsx";
import AdvisoryBoard from "./advisory/advisory.jsx";
import Research from "./research/research.jsx";
import Contact from "./contact/contact.jsx";
import Disclaimer from "./disclaimer/disclaimer.jsx";

const Home = () =>  {
    return   (
      <div >
        <Jumbotron />
        <About />
        <Principles />
        <Team />
        <AdvisoryBoard />
        <Research />
        <Contact />
        <Disclaimer />
      </div>
    );
  
}

export default Home;
