import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="c"
            src="https://hips.hearstapps.com/hmg-prod/images/tropical-beach-at-sunset-royalty-free-image-1655673364.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to COFO Concept!</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="c"
            src="https://ssl.tzoo-img.com/images/blog/legacyblog/us/wp-content/uploads/2018/02/6_WhitehavenBeach_Australia_shutterstock_378831505.jpg?width=412&spr=3"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="c"
            src="https://www.brettdeacon.com/images/xl/PrettyBeachSunrise1.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
