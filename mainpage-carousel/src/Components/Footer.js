import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faTwitter,
	faInstagram,
	faLinkedin,
	faYoutube,
	faTiktok,
} from "@fortawesome/free-brands-svg-icons";
// import picture from '../Images/The CoFo Concept 2.png';
export default function Footer() {
	return (
		<footer className="bg-white text-center text-white">
			<div className="container p-4 pb-0">
				<section className="mb-4">
					{/* <img src={picture} alt='Logo' style={{height: '50px'}} /> */}
					<a
						href="https://www.facebook.com/profile.php?id=8318387"
						className="btn btn-primary btn-floating m-1"
						style={{ backgroundColor: "#3b5998", borderRadius: "50%" }}
					>
						<FontAwesomeIcon icon={faFacebook} />
					</a>

					{/* <a
						href="#Twitter"
						className="btn btn-primary btn-floating m-1"
						style={{ backgroundColor: "#55acee", borderRadius: "50%" }}
					>
						<FontAwesomeIcon icon={faTwitter} />
					</a> */}

					<a
						href="https://www.instagram.com/itscourtneyeliz/"
						className="btn btn-primary btn-floating m-1"
						style={{ backgroundColor: "#ac2bac", borderRadius: "50%" }}
					>
						<FontAwesomeIcon icon={faInstagram} />
					</a>

					{/* <a
						href="#Linkedin"
						className="btn btn-primary btn-floating m-1"
						style={{ backgroundColor: "#0082ca", borderRadius: "50%" }}
					>
						<FontAwesomeIcon icon={faLinkedin} />
					</a> */}

					<a
						href="https://www.youtube.com/@itscourtneyeliz/featured"
						className="btn btn-primary btn-floating m-1"
						style={{ backgroundColor: "#FF0000", borderRadius: "50%" }}
					>
						<FontAwesomeIcon icon={faYoutube} />
					</a>

					{/* <a
						href="#Tiktok"
						className="btn btn-primary btn-floating m-1"
						style={{ backgroundColor: "#000000", borderRadius: "50%" }}
					>
						<FontAwesomeIcon icon={faTiktok} />
					</a> */}
				</section>
			</div>

			<div
				className="text-center p-3"
				style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
			>
				© {new Date().getFullYear()} CoFo Concept
			</div>
		</footer>
	);
}


//https://www.instagram.com/itscourtneyeliz/