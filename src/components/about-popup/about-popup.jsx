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
  {content: "CGS-1.png", alt: "0"},
  {content: "CGS-1.png", alt: "0"},
  {content: "CGS-1.png", alt: "0"}
];

class AboutPopUp extends Component {
  getIframeDimensions = () => {
    const frames = document.getElementsByTagName("iframe");
    const frameDimensions = frames[0].contentWindow.document.body.getElementsByTagName(
      "slide"
    )[0];
    const slideWidth = frameDimensions.offsetWidth;
    const slideHeight = frameDimensions.offsetHeight;

    for (let i = 0; i < frames.length; i++) {
      const width = `${slideWidth}px`;
      const height = `${slideHeight}px`;

      if (window.innerWidth < 500) {
        width = `${window.innerWidth}px`;
        height = `${window.innerWidth / 2}px`;
      }

      frames[i].style.width = width;
      frames[i].style.height = height;
    }
  };

  render() {
    return (
      <div id="about-popup" className="animated fadeIn slow">
        <Carousel {...settings}>
          {slides.map((slides, key) => {
            return (
              <div className="iframe_container" key={key}>
                {/* <iframe
                  title={slides.alt}
                  src={slides.content}
                  alt={slides.alt}
                  onLoad={this.getIframeDimensions}
                /> */}
                <img title={slides.alt} src={slides.content} alt={slides.alt} />
              </div>
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default AboutPopUp;
