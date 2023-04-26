import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import NavigationBarFinal from "../Components/NavigationBarFinal";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import "./CSSPages/Contact.css";
import Footer from "../Components/Footer";
import emailjs from "emailjs-com";
import{useEffect} from 'react';

// email service and template IDs for sending email
const serviceId = "service_88f6uzo";
const templateId = "template_9pyn2nh";
const userId = "cbHVCN5PjSJiOARoO";

function Contact() {
  // state for captcha completion and form submission
	const [captchaIsDone, setCaptchaDone] = useState(false);
	const [formisdone, setformisdone] = useState(false);

  // function to set captcha completion state
	function onChange() {
		console.log("Captcha done");
		setCaptchaDone(true);
	}

  // function to send email on form submission
	function sendEmail(event) {
		event.preventDefault();
		if (captchaIsDone) {
			const formData = new FormData(event.target);
			const name = formData.get("name");
			const email = formData.get("email");
			const subject = formData.get("subject");
			const message = formData.get("message");

			const templateParams = {
				name: name,
				email: email,
				subject: subject,
				message: message,
			};

      // send email using emailjs library
			emailjs
				.send(serviceId, templateId, templateParams, userId)
				.then(function (response) {
					console.log("SUCCESS!", response.status, response.text);
					if (response.status === 200) {
						setformisdone(true);
					}
				})
				.catch(function (error) { // if email fails to send
					console.log("FAILED...", error);
				});
		}
		
	}

  // reload page after successful form submission
	useEffect(() => {
		if (formisdone) {
			window.location.reload();
		}
	}, [formisdone]);


	return (
		<>
			<NavigationBarFinal />
			<div className="container mt-5 mb-5">
				<div className="row justify-content-center">
					<div className="col-md-6">
<<<<<<< Updated upstream
						<Form onSubmit={sendEmail}>
=======
						<Form controlId= "Contact">
>>>>>>> Stashed changes
							<h1 className="text-center mb-4">Contact me</h1>
							<Form.Group controlId="formBasicName">
								<Form.Label>Name</Form.Label>
								<Form.Control
									type="text"
									name="name"
									placeholder="Enter your name"
									required
								/>
							</Form.Group>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email</Form.Label>
								<Form.Control
									type="email"
									name="email"
									placeholder="Enter your email"
									required
								/>
							</Form.Group>
							<Form.Group controlId="formBasicSubject">
								<Form.Label>Subject</Form.Label>
								<Form.Control
									type="text"
									name="subject"
									placeholder="Enter your subject"
									required
								/>
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
										name="message"
										style={{ height: "150px" }}
										required
									/>
								</FloatingLabel>
							</Form.Group>
							<Form.Group controlId="formBasicCheckbox">
								{/* <Form.Check
									type="checkbox"
									label="Send me a copy of this message"
								/> */}
							</Form.Group>
							<ReCAPTCHA  // recaptcha component
								sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
								size="normal"
								onChange={onChange}
							/>
							<div className="text-center">
								<Button
									variant="primary"
									type="submit"
									disabled={!captchaIsDone} // disable submit button until captcha is completed
								>
									Submit
								</Button>
							</div>
						</Form>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Contact;
