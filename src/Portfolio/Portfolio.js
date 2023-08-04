import React from "react";
import "./Portfolio.css";
import Work from "./Work";
import {projectData} from './Data.js'

const Portfolio = () => {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent works</span>
      {/* <Works /> */}
      <div className="work__container container grid">
      {projectData.map((item)=>{
          return <Work data={item}/>
        })}
        
      </div>
    </section>
  );
};

export default Portfolio;
