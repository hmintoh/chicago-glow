import React, {Component} from "react";
import Carousel from "react-slick";
import "./about-popup.css";

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2500,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
};

const slides = [
  {text: "lerem ipsum 1"},
  {text: "lerem ipsum 2"},
  {text: "lerem ipsum 3"}
];

class AboutPopUp extends Component {
  render() {
    return (
      <div id="about-popup">
        <div className="animated fadeIn slow">
          <h2>Slide Deck</h2>
          <Carousel {...settings}>
            {slides.map(slides => {
              return (
                <div className="card_content">
                  <h3>{slides.text}</h3>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    );
  }
}

export default AboutPopUp;
