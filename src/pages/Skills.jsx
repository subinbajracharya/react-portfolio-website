import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNode, FaGithub } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import SkillsList from "./SkillsList";

const skillArray = [
  { name: "HTML5", icon: <FaHtml5 size={32} /> },
  { name: "CSS3", icon: <FaCss3Alt size={32} /> },
  { name: "JavaScript", icon: <IoLogoJavascript size={32} /> },
  { name: "React", icon: <FaReact size={32} /> },
  { name: "Node.js", icon: <FaNode size={32} /> },
  { name: "GitHub", icon: <FaGithub size={32} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-5 bg-light text-dark">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-4">
            <h2 className="text-center mb-0">Skills</h2>
          </div>
          <div className="col-12">
            <SkillsList skills={skillArray} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
