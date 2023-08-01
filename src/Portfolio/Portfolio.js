import React from "react";
import "./Portfolio.css";
import Work from "./Work";

const Portfolio = () => {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent works</span>
      {/* <Works /> */}
      <div className="work__container container grid">
        <Work />
        <Work />
        <Work />
        <Work />
        <Work />
        <Work />
      </div>
    </section>
  );
};

export default Portfolio;
