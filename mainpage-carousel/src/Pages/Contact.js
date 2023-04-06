import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import NavigationBarFinal from "../Components/NavigationBarFinal";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import "./CSSPages/Contact.css";

function Contact() {
	const [captchaIsDone, setCaptchaDone] = useState(false);

	function onChange() {
		console.log("Captcha done");
		setCaptchaDone(true);
	}

	return (
		<>
			<NavigationBarFinal />
			<div className="container mt-5 mb-5">
				<div className="row justify-content-center">
					<div className="col-md-6">
						<Form>
							<h1 className="text-center mb-4">Contact me</h1>
							<Form.Group controlId="formBasicName">
								<Form.Label>Name</Form.Label>
								<Form.Control type="text" placeholder="Enter your name" />
							</Form.Group>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email</Form.Label>
								<Form.Control type="email" placeholder="Enter your email" />
							</Form.Group>
							<Form.Group controlId="formBasicSubject">
								<Form.Label>Subject</Form.Label>
								<Form.Control type="text" placeholder="Enter your subject" />
							</Form.Group>
							<Form.Group controlId="formBasicMessage">
								<Form.Label>Message</Form.Label>
								<FloatingLabel
									controlId="formBasicMessage"
									label="Enter your message"
									className="mb-3"
								>
									<Form.Control
										as="textarea"
										style={{ height: "150px" }}
									/>
								</FloatingLabel>
							</Form.Group>
							<Form.Group controlId="formBasicCheckbox">
								<Form.Check
									type="checkbox"
									label="Send me a copy of this message"
								/>
							</Form.Group>
							<ReCAPTCHA
								sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
								size="normal"
								onChange={onChange}
							/>
							<div className="text-center">
								<Button
									variant="primary"
									type="submit"
									disabled={!captchaIsDone}
								>
									Submit
								</Button>
							</div>
						</Form>
					</div>
				</div>
			</div>
		</>
	);
}

export default Contact;

//npm install dotenv
// npm install --save react-recaptcha
//npm install react-google-recaptcha
