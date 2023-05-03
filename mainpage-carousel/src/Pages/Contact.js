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

  /**
   * 
   * @param {*} event 
   * @returns 
   * Function that sends an email when the "submit" button is clicked
   * The function takes in the event as a parameter
   * The function returns the emailjs.send function
   * The function also checks if the captcha is completed
   * If the captcha is not completed, the function returns an error message
   * If the captcha is completed, the function sends an email using the emailjs.send function
   * If the email is sent successfully, the function displays a success message
   */
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

  /**
   * 
   * @returns
   * Function that reloads the page when the form is submitted
   */
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
						<Form onSubmit={sendEmail}>
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
