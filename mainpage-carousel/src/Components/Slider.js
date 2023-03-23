import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ".//CSSCOMPONENTS/Slider.css";
import Picture from "../Images/beach 2.JPG";
const Slider = () => {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          fontSize: "18px",
        }}
      ></div>
      <Carousel>
        <Carousel.Item>
          <div className="c">
            <img src={Picture} alt="beach 2.JPG" />
          </div>
          <Carousel.Caption>
            <h3>Welcome to COFO Concept!</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <img
              className="c"
              src="https://www.travelandleisure.com/thmb/uLqruTjACardjIBe7FK8tMfA6ZM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/elafonissi-beach-crete-greece-WRLDBEACH0421-50fd96fe8e5e45448d154ae43b38b855.jpg"
              alt="Second slide"
              width="100%"
              height="772"
            />
          </div>

          <Carousel.Caption>
            <h3>
              “Success usually comes to those who are too busy to be looking for
              it.”
            </h3>
            <p>.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="c"
            src="https://www.brettdeacon.com/images/xl/PrettyBeachSunrise1.jpg"
            alt="Third slide"
            width="100%"
            height="772"
          />

          <Carousel.Caption>
            <h3>"The body achieves what the mind believes."</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
