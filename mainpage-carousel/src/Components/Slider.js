import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ".//CSSCOMPONENTS/Slider.css"
import Picture from "../Images/beach6.JPG"
import GymPic from "../Images/pool pic 7.JPG"
import ThirdPic from "../Images/pool pic 3.JPG"
const Slider = () => {
  return (
    <>
      <div style={{
          textAlign: "center",
           fontSize: "18px"
      }}></div>
      <Carousel>
        <Carousel.Item>
          <img
            className="FirstSlide"
            src={Picture}
            alt="First slide"
            width="100%"
            height="500px"
          />
          <Carousel.Caption>
              <h2>Welcome to CoFo Concept!</h2>
              <p>Testing</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="SecondSlide"
            src={GymPic}
            alt="Second slide"
            width="100%"
            height="500px"
          />

          <Carousel.Caption>
            <h2>“Success usually comes to those who are too busy to be looking for it.”</h2>
            <p>Testing</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="ThirdSlide"
            src={ThirdPic}
            alt="Third slide"
            width="100%"
            height="500px"
          />

          <Carousel.Caption>
            <h2>"The body achieves what the mind believes."</h2>
            <p>Testing
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
