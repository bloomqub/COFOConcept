import React, { useState } from "react";
import NavigationBarFinal from "../Components/NavigationBarFinal"; // Importing NavigationBarFinal component from the Components folder
import "./CSSPages/OnDemandPage.css"; // Importing OnDemandPage.css file for styling
import Footer from "../Components/Footer"; // Importing Footer component from the Components folder
import ReactPlayer from "react-player"; // Importing ReactPlayer component
import { Card, Button } from "react-bootstrap"; // Importing Card and Button components from react-bootstrap
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importing Router, Routes, and Route components from react-router-dom
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from react-router-dom
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Importing getAuth and onAuthStateChanged functions from firebase/auth
import Profile1 from "../Images/gym pic 3.JPG"; // Importing image file from the Images folder
import Profile2 from "../Images/gym pic 4.JPG"; // Importing image file from the Images folder
import Profile3 from "../Images/gym pic 5.JPG"; // Importing image file from the Images folder
import Profile4 from "../Images/gym pic 6.JPG"; // Importing image file from the Images folder
import Profile5 from "../Images/weight pic.JPG"; // Importing image file from the Images folder
import Profile6 from "../Images/Community.png"; // Importing image file from the Images folder

const OnDemandPage = () => {
	// Declaring state variables using the useState hook
	const [showVideo, setShowVideo] = useState(false); // showVideo state variable controls whether or not the video player is displayed
	const [videoUrl, setVideoUrl] = useState(""); // videoUrl state variable stores the URL of the video to be displayed
	const [videoTitle, setVideoTitle] = useState(""); // videoTitle state variable stores the title of the video to be displayed

	// Initializing Firebase authentication
	const auth = getAuth();

	// Retrieving the currently logged in user
	const user = auth.currentUser;

	// Initializing the useNavigate hook to navigate to different pages
	const navigate = useNavigate();

	// Function that checks if the user is authenticated and redirects to the appropriate page
	function authCheck() {
		if (user) {
			window.location.href =
				"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=HV77LMWL2NZ6U";
		} else {
			window.location.href = "/signup";
		}
	}

	// Event handler for when the button "view workout" is clicked
	const handleViewClick = (title, url) => {
		setShowVideo(true); // Display the video player
		setVideoUrl(url); // Set the URL of the video to be displayed
		setVideoTitle(title); // Set the title of the video to be displayed
	};

	// Event handler for when the video player is closed
	const handleVideoClose = () => {
		setShowVideo(false); // Hide the video player
		setVideoUrl(""); // Clear the URL of the video
		setVideoTitle(""); // Clear the title of the video
	};

	return (
		<>
			{/* Navigation bar component */}
			<NavigationBarFinal />

			{/* Header section */}
			<section className="header">
				<h1>On Demand Workouts</h1>
				<p>
					Get access to our library of on-demand workout videos anytime,
					anywhere!
				</p>
			</section>

			{/* Category section */}
			<section className="category">
				<h2>Recent Workouts</h2>
				<div className="card-grid">
					{/* Card component */}
					<Card style={{ width: "100%" }}>
						<Card.Img
							variant="top"
							src={Profile1}
							style={{ height: "100%", width: "100%" }}
						/>
						<Card.Body>
							<Card.Title>Ultimate Back Workout</Card.Title>
							<Card.Subtitle className="mb-2">
								Tone, Define and Strengthen Your Back
							</Card.Subtitle>

							{/* Button component */}
							<Button
								variant="primary"
								onClick={() => {
									// When the button is clicked
									authCheck(); // Check if the user is authenticated
									handleViewClick(
										// Display the video player
										"Ultimate Back Workout",
										"https://youtu.be/iGVZszacXkk"
									);
								}}
							>
								View Workout
							</Button>
						</Card.Body>
					</Card>
					<Card style={{ width: "100%" }}>
						<Card.Img
							variant="top"
							src={Profile2}
							style={{ height: "100%", width: "100%" }}
						/>
						<Card.Body>
							<Card.Title>Stronger Together</Card.Title>
							<Card.Subtitle className="mb-2">
								Full Body Community Workout
							</Card.Subtitle>
							<Button
								variant="primary"
								onClick={() =>
									handleViewClick(
										"Stronger Together",
										"https://youtu.be/4ElNmCCnkrE"
									)
								}
							>
								View Workout
							</Button>
						</Card.Body>
					</Card>
					<Card style={{ width: "100%" }}>
						<Card.Img
							variant="top"
							src={Profile3}
							style={{ height: "100%", width: "100%" }}
						/>
						<Card.Body>
							<Card.Title>Ultimate Burnout</Card.Title>
							<Card.Subtitle className="mb-2">
								High-Intensity Full Body Workout
							</Card.Subtitle>
							<Button
								variant="primary"
								onClick={() =>
									handleViewClick(
										"Ultimate Burnout",
										"https://youtu.be/awGOrhDgacU"
									)
								}
							>
								View Workout
							</Button>
						</Card.Body>
					</Card>
					<Card style={{ width: "100%" }}>
						<Card.Img
							variant="top"
							src={Profile4}
							style={{ height: "100%", width: "100%" }}
						/>
						<Card.Body>
							<Card.Title>Tricep Toning </Card.Title>
							<Card.Subtitle className="mb-2">
								Target Your Triceps and Tone Your Arms
							</Card.Subtitle>
							<Button
								variant="primary"
								onClick={() =>
									handleViewClick(
										"Tricep Toning",
										"https://youtu.be/a1BvPwTokYU"
									)
								}
							>
								View Workout
							</Button>
						</Card.Body>
					</Card>
					{/* add more cards here... If needed */}
					{/* <section className="category">
				<h2>Full Body</h2>
				
			</section>
			<section className="category">
				<h2>Upper Body</h2>

			</section>
			<section className="category">
				<h2>Lower Body</h2>

			</section>
			<section className="category">
				<h2>Core</h2>
				
			</section> */}
				</div>
			</section>
			{showVideo && (
				// If the showVideo state is true, show the video modal
				<div className="video-modal">
					<div className="video-player">
						<h2>{videoTitle}</h2> {/* Display the title of the video */}
						<ReactPlayer
							url={videoUrl} // Set the URL of the video to be displayed
							controls={true} // Display the video controls
							width="100%"
							height="100vh"
						/>
						<Button variant="danger" onClick={handleVideoClose}>
							{" "}
							{/* Close the video player Close */}
						</Button>
					</div>
				</div>
			)}

			{/* <section className="category">
				<h2>Full Body</h2>
				
			</section>
			<section className="category">
				<h2>Upper Body</h2>
			</section>
			<section className="category">
				<h2>Lower Body</h2>
			</section>
			<section className="category">
				<h2>Core</h2>
			</section> */}
			<section className="subscribe">
				<h2>Subscribe Today</h2>
				<p>Don't miss out on our latest on-demand workout videos!</p>
				<form
					action="https://www.paypal.com/cgi-bin/webscr"
					method="post"
					target="_top"
				>
					<input type="hidden" name="cmd" value="_s-xclick"></input>
					<input
						type="hidden"
						name="hosted_button_id"
						value="HV77LMWL2NZ6U"
					></input>
					<table>
						<tr>
							<td>
								<input type="hidden" name="on0" value="Workout Video"></input>
								Workout Video
							</td>
						</tr>
						<tr>
							<td>
								<select name="os0">
									<option value="Ultimate Back Workout">
										Ultimate Back Workout{" "}
									</option>
									<option value="Stronger Together">Stronger Together </option>
									<option value="Ultimate Burnout">Ultimate Burnout </option>
									<option value="Tricep Toning">Tricep Toning </option>
								</select>{" "}
							</td>
						</tr>
					</table>
					<input
						type="image"
						src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif"
						border="0"
						name="submit"
						alt="PayPal - The safer, easier way to pay online!"
					></input>
					<img
						alt=""
						border="0"
						src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
						width="1"
						height="1"
					></img>
				</form>
			</section>
			<Footer />
		</>
	);
};
export default OnDemandPage;
