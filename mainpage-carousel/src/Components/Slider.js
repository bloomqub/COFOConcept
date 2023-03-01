import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            class="c"
            src="https://hips.hearstapps.com/hmg-prod/images/tropical-beach-at-sunset-royalty-free-image-1655673364.jpg"
            alt="First slide"
            width="2121"
            height="1414"
          />
          <Carousel.Caption>
            <h3>Welcome to COFO Concept!</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            class="c"
            src="https://www.travelandleisure.com/thmb/uLqruTjACardjIBe7FK8tMfA6ZM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/elafonissi-beach-crete-greece-WRLDBEACH0421-50fd96fe8e5e45448d154ae43b38b855.jpg"
            alt="Second slide"
            width="2121"
            height="1414"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            class="c"
            src="https://www.brettdeacon.com/images/xl/PrettyBeachSunrise1.jpg"
            alt="Third slide"
            width="2121"
            height="1414"
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
