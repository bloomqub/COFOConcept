import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // importing a FontAwesomeIcon component
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons"; // importing a FontAwesomeIcon
import ".//CSSCOMPONENTS/NavigationBar.css";

const NavigationBar = () => {
  return (
    <>
      <div
        style={{
          // inline styling for the top banner
          backgroundColor: "orange",
          padding: "10px",
          textAlign: "center",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        Start Your Free Trial and Join The Concept Today!
      </div>
      <Navbar // creating a Navbar component
        collapseOnSelect // Navbar will collapse on smaller screens
        expand="lg" // Navbar will expand on larger screens
        bg="light" // Navbar will have a light background
        variant="light" // Navbar will have a light variant
        sticky="top" // Navbar will stick to the top of the page
      >
        <Container>
          <Navbar.Brand href="/">
            {" "}
            {/* Navbar Brand  */}
            <div className="logo">
              {" "}
              {/* logo class to style in css */}
              <span className="cofo">CoFo</span>{" "}
              {/* cofo class to style in css */}
              <span className="concept">CONCEPT</span>{" "}
              {/* concept class to style in css */}
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />{" "}
          {/* Navbar Toggle for reponsive navigation */}
          <Navbar.Collapse id="responsive-navbar-nav">
            {" "}
            {/* Navbar Collapse for reponsive navigation for mobile phones*/}
            <Nav className="mx-auto">
              {" "}
              {/* Nav component for navigation */}
              <Nav.Link href="/OnDemand">On Demand</Nav.Link>
              <Nav.Link href="/Programs">Programs</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#Cart">
                <FontAwesomeIcon icon={faShoppingCart} />
                {" Cart"}
                {/* FontAwesomeIcon component for icons(Cart icon) */}
              </Nav.Link>
              <Nav.Link eventKey={2} href="#login">
                {" "}
                {/* eventKey is used to identify the component */}
                <FontAwesomeIcon icon={faUser} />
                {" Login"}
                {/* FontAwesomeIcon component for icons(User icon) */}
              </Nav.Link>
              <Nav.Link
                href="#SignUp"
                style={{
                  // inline styling for the Sign Up button
                  backgroundColor: "#FFB85F", // orange
                  color: "white",
                  borderRadius: "20px", // rounded corners
                  padding: "10px 20px",
                  fontWeight: "bold",
                  transition: "all 0.3s ease-in-out", // transition for hover effect
                }}
              >
                SIGN UP!
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavigationBar;
