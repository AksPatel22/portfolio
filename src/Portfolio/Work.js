import React from "react";
import projectImg from "../assets/work1.jpg";

const Work = () => {
  return (
    <div className="work__card">
      <img src={projectImg} alt="img" className="work__img" />
      <h3 className="work__title">title</h3>
      <p>desc</p>
      <a href="#" className="work__button">
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default Work;
