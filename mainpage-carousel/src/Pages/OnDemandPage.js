import React from "react";
import NavigationBar from "../Components/NavigationBar";
import PropTypes from "prop-types";
import "./CSSPages/OnDemandPage.css"
import NavigationBarFinal from "../Components/NavigationBarFinal";

const OnDemandPage = () => {
  return (
    <>
      <NavigationBarFinal />
      <section className="header">
      </section>
      <section className="Recent">
        <h2>Recent</h2>
        <FitnessProgramGrid numPrograms={7} />
      </section>
      <section className="Fullbody">
        <h2>Full Body</h2>
        <FitnessProgramGrid numPrograms={7} />
      </section>
      <section className="Upperbody">
        <h2>Upper Body</h2>
        <FitnessProgramGrid numPrograms={7} />
      </section>
      <section className="Lowerbody">
        <h2>Lower Body</h2>
        <FitnessProgramGrid numPrograms={7} />
      </section>
      <section className="Core">
        <h2>Core</h2>
        <FitnessProgramGrid numPrograms={7} />
      </section>
    </>
  );
};

function FitnessProgramGrid({ numPrograms }) {
  return (
    <div className="row flex-nowrap overflow-auto">
      {[...Array(numPrograms)].map((_, idx) => (
        <FitnessProgramCardItem key={idx} />
      ))}
    </div>
  );
}

FitnessProgramGrid.propTypes = {
  numPrograms: PropTypes.number.isRequired,
};

function FitnessProgramCardItem() {
  return (
    <div className="col">
      <div className="card h-100">
        <img
          src="holder.js/100px160"
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

export default OnDemandPage;
