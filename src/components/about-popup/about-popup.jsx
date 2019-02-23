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

const slides = [{content: "", alt: "1"}];

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
                  <iframe
                    width={window.innerWidth}
                    height={window.innerHeight}
                    title="Slide Deck"
                    src="test.html"
                    alt={slides.alt}
                  />
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
