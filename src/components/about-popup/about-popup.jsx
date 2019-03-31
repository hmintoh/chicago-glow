import React, {Component} from "react";
import Carousel from "react-slick";
import "./about-popup.css";

const settings = {
  dots: true,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 2500,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true
};

const slides = [
  {content: "test.html", alt: "0"},
  {content: "test.1.html", alt: "1"},
  {content: "test.2.html", alt: "2"}
];

class AboutPopUp extends Component {
  componentDidMount = () => {
    this.setIframeDimensions();
  };

  setIframeDimensions = () => {
    const htmlDocument = document
      .getElementById("about-popup-iframe")
      .contentWindow.document.getElementsByTagName("slide");
  };

  render() {
    return (
      <div id="about-popup">
        <div className="animated fadeIn slow">
          <Carousel {...settings}>
            {slides.map((slides, key) => {
              return (
                <div className="card_content" key={key}>
                  <iframe
                    id="about-popup-iframe"
                    title={slides.alt}
                    width={window.innerWidth}
                    height={window.innerHeight}
                    src={slides.content}
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
