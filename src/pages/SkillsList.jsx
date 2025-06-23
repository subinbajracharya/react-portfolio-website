import React from "react";

const SkillsList = ({ skills }) => {
  return (
    <div className="row text-center">
      {skills.map((skill, index) => (
        <div key={index} className="col-6 col-md-2 mb-3">
          <div>{skill.icon}</div>
          <p>{skill.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SkillsList;
