import React, { useState } from "react";
import NavigationBarFinal from "../Components/NavigationBarFinal";
import "./CSSPages/OnDemandPage.css";
import Footer from "../Components/Footer";
import ReactPlayer from "react-player";
import { Card, Button } from "react-bootstrap";
import Profile1 from "../Images/gym pic 3.JPG";
import Profile2 from "../Images/gym pic 4.JPG";
import Profile3 from "../Images/gym pic 5.JPG";
import Profile4 from "../Images/gym pic 6.JPG";
import Profile5 from "../Images/weight pic.JPG";
import Profile6 from "../Images/Community.png";

const OnDemandPage = () => {
	const [showVideo, setShowVideo] = useState(false);
	const [videoUrl, setVideoUrl] = useState("");
	const [videoTitle, setVideoTitle] = useState("");

	const handleViewClick = (title, url) => {
		setShowVideo(true);
		setVideoUrl(url);
		setVideoTitle(title);
	};

	const handleVideoClose = () => {
		setShowVideo(false);
		setVideoUrl("");
		setVideoTitle("");
	};

	return (
		<>
			<NavigationBarFinal />
			<section className="header">
				<h1>On Demand Workouts</h1>
				<p>
					Get access to our library of on-demand workout videos anytime,
					anywhere!
				</p>
			</section>
			<section className="category">
				<h2>Recent Workouts</h2>
				<div className="card-grid">
					<Card style={{ width: "100%" }}>
						<Card.Img
							variant="top"
							src={Profile1}
							style={{ height: "100%", width: "100%" }}
						/>
						<Card.Body>
							<Card.Title>
								Ultimate Back Workout
							</Card.Title>
							<Card.Subtitle className="mb-2">
							Tone, Define and Strengthen Your Back
							</Card.Subtitle>
							<Button
								variant="primary"
								onClick={() =>
									handleViewClick("Ultimate Back Workout", "https://youtu.be/iGVZszacXkk")
								}
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
							<Button variant="primary" onClick={() => handleViewClick("Ultimate Burnout", "https://youtu.be/awGOrhDgacU")}>
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
							<Button variant="primary" onClick={() => handleViewClick("Tricep Toning", "https://youtu.be/a1BvPwTokYU")}>
								View Workout
							</Button>
						</Card.Body>
					</Card>
					{/* add more cards here... If needed */}
				</div>
			</section>
			{showVideo && (
				<div className="video-modal">
					<div className="video-player">
						<h2>{videoTitle}</h2>
						<ReactPlayer
							url={videoUrl}
							controls={true}
							width="100%"
							height="100vh"
						/>
						<Button variant="danger" onClick={handleVideoClose}>
							Close
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
				<Button href="/signup" variant="success">
					Subscribe Now
				</Button>
			</section>
			<Footer />
		</>
	);
};
export default OnDemandPage;
