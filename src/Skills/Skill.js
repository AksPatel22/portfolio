import React from "react";

const Skill = ({data}) => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">{data.title}</h3>
      <div className="skills__box">
        <div className="skills__group">
          {data.skills.map((skill)=>{
            return <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">
              {skill}
              </h3>
            </div>
          </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default Skill;
