import React from "react";
import "./Skills.css";
import Skill from "./Skill";
import {data} from './skilldata'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="skills__container container grid">
        {data.map((item)=>{
          return <Skill data={item}/>
        })}
      
      </div>
    </section>
  );
};

export default Skills;
