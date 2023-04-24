import React from "react";
import facebook from "../cofo-img/facebook.svg";
import youtube from "../cofo-img/youtube.svg";
import instagram from "../cofo-img/instagram.svg";
import "./CSSCOMPONENTS/Footer.css"


export default function Footer() {
	return (
		<footer className="text-center text-black" style={{
			background: "linear-gradient(#FFA500, #fff)",
		}}>
			<div className="p-4 pb-0">
				<section className="mb-4">
					<span className="inline-images">
						
						<div className="social-icon">
							<a
								href="https://www.facebook.com/profile.php?id=8318387"
							>
								<img src={facebook} />
							</a>

							<a
								href="https://www.instagram.com/itscourtneyeliz/"
							>
								<img src={instagram}/>
							</a>

							<a
								href="https://www.youtube.com/@itscourtneyeliz/featured"
							>
								<img src={youtube}/>
							</a>
						</div>
					</span>
				</section>
			</div>

			<div
			className="footer-year-text"
			>
				© {new Date().getFullYear()} CoFo Concept
			</div>
		</footer>
	);
}
