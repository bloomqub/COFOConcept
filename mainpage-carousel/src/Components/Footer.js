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

export default function Footer() {
	return (
		<footer className="bg-black text-center text-white">
			<div className="container p-4 pb-0 bg-black">
				<section className="mb-4">
					<a
						href="https://www.facebook.com/profile.php?id=8318387"
						className="btn btn-primary btn-floating m-1"
						style={{ backgroundColor: "#3b5998", borderRadius: "50%" }}
					>
						<FontAwesomeIcon icon={faFacebook} />
					</a>

					<a
						href="https://www.instagram.com/itscourtneyeliz/"
						className="btn btn-primary btn-floating m-1"
						style={{ backgroundColor: "#ac2bac", borderRadius: "50%" }}
					>
						<FontAwesomeIcon icon={faInstagram} />
					</a>

					<a
						href="https://www.youtube.com/@itscourtneyeliz/featured"
						className="btn btn-primary btn-floating m-1"
						style={{ backgroundColor: "#FF0000", borderRadius: "50%" }}
					>
						<FontAwesomeIcon icon={faYoutube} />
					</a>
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
