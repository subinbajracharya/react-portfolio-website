import React from "react";
import { FaLink, FaGithub } from "react-icons/fa";

const ProjectsList = [
  {
    image: "/assets/images/recipe-generator-app-thumbnail.png",
    name: "Recipe Generator App",
    desc: "An App which allows users to search and discover meal recipes instantly by entering ingredients or dish names, fetching results from TheMealDB API.",
    git_href: "https://github.com/subinbajracharya/Recipe-generator-app",
    project_href: "https://recipe-generator-app-new.vercel.app/",
  },
  {
    image: "/assets/images/ft-thumbnail.png",
    name: "Financial Tracker",
    desc: "A personal financial tracker web app that helps users manage income and expenses, visualize spending through interactive charts. Built with the MERN stack, and deployed Front-end on Vercel and Back-end on Render.",
    git_href: "https://github.com/subinbajracharya/financial-tracker-frontend",
    project_href: "https://financial-tracker-frontend-alpha.vercel.app",
  },
  {
    image: "/assets/images/lms-thumbnail.png",
    name: "Learning Management System",
    desc: "A comprehensive Learning Management System (LMS) built with the MERN stack, featuring user authentication, course management, and progress tracking.",
    git_href: "",
    project_href: "",
  },
  {
    image: "/assets/images/electra-hub-thumbnail.png",
    name: "Electra Hub",
    desc: "ElectraHub delivers a crisp shopping experience using React Server Components (Next.js), Tailwind CSS, image optimization, and serverless functions on Vercel.",
    git_href: "https://github.com/subinbajracharya?tab=repositories",
    project_href: "https://electrahub.vercel.app/",
  },
];
const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-gradient-custom text-white">
      <div className="container">
        <h2 className="fw-bold text-center mb-5">Recent Projects</h2>
        <div className="row">
          {ProjectsList.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-3 pb-3">
              <div className="card h-100 shadow-sm overflow-hidden">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.name}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div className="mb-3">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.desc}</p>
                  </div>
                  <div className="link-buttons">
                    <a
                      href={item.git_href}
                      target="_blank"
                      className="btn btn-sm btn-dark me-2"
                    >
                      {<FaGithub />} GitHub
                    </a>
                    <a
                      href={item.project_href}
                      target="_blank"
                      className="btn btn-sm btn-outline-dark"
                    >
                      <FaLink /> Link to Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
