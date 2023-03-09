import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./CSSCOMPONENTS/About.css";
import Picture from "../Images/MGJ_6825.JPG.jpg";

export default class About extends Component {
	render() {
		return (
			<div className="about-container">
				<div className="picture-container">
					<img src={Picture} alt="about-me-Image" />
				</div>
				<div className="text-container">
					<h1>About Me</h1>
					<p>
						Getting in shape shouldn't be a punishment. It's an amazing and
						empowering lifestyle decision that anyone can make. I believe in
						finding the pleasurable side of fitness; and while there may be a
						sore muscle or two along the way, the benefits of fitness are worth
						the challenge. I have developed my training regime by working with a
						variety of people, and constantly adapting my program to the needs
						of my new clients.
					</p>
					<div className="button-container">
						<Button variant="outline-dark">Contact me</Button>
					</div>
				</div>
			</div>
		);
	}
}

// Notes
// -------
// * Make the contact me button centered
// * Make the picture smaller
// * Make the picture a circle (maybe)
// * add href to the button
