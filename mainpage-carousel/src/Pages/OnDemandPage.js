import React from "react";
import NavigationBarFinal from "../Components/NavigationBarFinal";
import PropTypes from "prop-types";
import "./CSSPages/OnDemandPage.css";

const OnDemandPage = () => {
	return (
		<>
			<NavigationBarFinal />
			<section className="header"></section>
			<section className="category">
				<h2>Recent</h2>
				<FitnessProgramGrid
					numPrograms={7}
					thumbnailUrl="https://via.placeholder.com/150"
				/>
			</section>
			<section className="category">
				<h2>Full Body</h2>
				<FitnessProgramGrid
					numPrograms={7}
					thumbnailUrl="https://via.placeholder.com/150"
				/>
			</section>
			<section className="category">
				<h2>Upper Body</h2>
				<FitnessProgramGrid
					numPrograms={7}
					thumbnailUrl="https://via.placeholder.com/150"
				/>
			</section>
			<section className="category">
				<h2>Lower Body</h2>
				<FitnessProgramGrid
					numPrograms={7}
					thumbnailUrl="https://via.placeholder.com/150"
				/>
			</section>
			<section className="category">
				<h2>Core</h2>
				<FitnessProgramGrid
					numPrograms={7}
					thumbnailUrl="https://via.placeholder.com/150"
				/>
			</section>
		</>
	);
};

function FitnessProgramGrid({ numPrograms, thumbnailUrl }) {
	return (
		<div className="row flex-nowrap overflow-auto">
			{[...Array(numPrograms)].map((_, idx) => (
				<FitnessProgramCardItem key={idx} thumbnailUrl={thumbnailUrl} />
			))}
		</div>
	);
}

FitnessProgramGrid.propTypes = {
	numPrograms: PropTypes.number.isRequired,
	thumbnailUrl: PropTypes.string.isRequired,
};

function FitnessProgramCardItem({ thumbnailUrl }) {
	return (
		<div className="col">
			<div className="card h-100">
				<img
					src={thumbnailUrl}
					alt="Video Thumbnail"
					className="card-img-top img-fluid"
				/>
				<div className="card-body">
					<h5 className="card-title">Video Title</h5>
					<p className="card-text"></p>
					<button className="btn btn-primary">Buy Now</button>
				</div>
			</div>
		</div>
	);
}

FitnessProgramCardItem.propTypes = {
	thumbnailUrl: PropTypes.string.isRequired,
};

export default OnDemandPage;
