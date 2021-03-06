import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div id="contact" className="secB">
      <div className="container">
        <h2>Get in Touch</h2>
        <p>chicago.global@mindfulwealth.com</p>
        <a
          href="https://www.mindfulwealth.com/en/fund-management/chicago-global-strategies/"
          target="_blank"
          id="mindful-wealth"
          rel="noopener noreferrer"
        >
          <button className="btn_investNow">
            Request Performance and FactSheet
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
