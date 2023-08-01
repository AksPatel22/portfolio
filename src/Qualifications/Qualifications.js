import React, { useState } from "react";
import "./Qualifications.css";

const Qualifications = () => {
  const [toggle, setToggle] = useState(1);
  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle"></span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggle === 1
                ? "qualification__button button--flex qualification-active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification-icon"></i>{" "}
            Education
          </div>
          <div
            className={
              toggle === 2
                ? "qualification__button button--flex qualification-active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification-icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification__section">
          <div
            className={
              toggle === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Cambrian College at Sudbury, Ontario
                </h3>
                <span className="qualification__subtitle">
                  Diploma in Game Design
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> January 2022 - April
                  2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
          <div
            className={
              toggle === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Artoon Solution Pvt. Ltd.
                </h3>
                <span className="qualification__subtitle">
                  Senior Unity 3D Game Technologist(Game Developer)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> May 2019 - February
                  2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Unity Developer Trainee
                </h3>
                <span className="qualification__subtitle">Valora Infotech</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> November 2018 - April
                  2019
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
