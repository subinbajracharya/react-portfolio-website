import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";

const truncate = (text = "", max = 120) =>
  text.length > max ? text.slice(0, max).trimEnd() + "..." : text;

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="card-inner">
        <div className="card-image-wrapper">
          <img src={project.image} className="card-image" alt={project.name} />
          <div className="card-overlay">
            <div className="overlay-content">
              <a
                href={project.git_href}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn github-btn"
                aria-label="View GitHub Repository"
              >
                <FaGithub />
              </a>
              {project.project_href && project.project_href.trim() && (
                <a
                  href={project.project_href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn live-btn"
                  aria-label="View Live Project"
                >
                  <FaLink />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="card-body-custom">
          <h3 className="card-title h6 mb-2" title={project.name}>
            {truncate(project.name, 30)}
          </h3>
          <p className="card-description" title={project.desc}>
            {truncate(project.desc, 130)}
          </p>
          <div className="tech-stack">
            {project.tech?.map((tag, index) => (
              <span key={index} className="tech-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
