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
    image: "/assets/images/movie-world-app-thumbnail.png",
    name: "Movie Search App",
    desc: "A simple React app to search movies by title using the OMDb API. View movie posters, release years, and details in a clean interface.",
    git_href: "https://github.com/subinbajracharya/React-Movie-Search-App",
    project_href: "https://react-movie-search-app-ten.vercel.app/",
  },
  {
    image: "/assets/images/demo-project.jpg",
    name: "Personal Portfolio",
    desc: "A React.js web app that fetches and displays meals from an API with a search and filter feature.",
    git_href: "https://github.com/yourusername/consent-app",
    project_href: "https://yourprojectlink.com/consent-app",
  },
  {
    image: "/assets/images/demo-project.jpg",
    name: "Personal Portfolio",
    desc: "A full-stack MERN task manager with user auth, task CRUD operations, and responsive UI.",
    git_href: "https://github.com/yourusername/portfolio",
    project_href: "https://yourprojectlink.com/consent-app",
  },
];
const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-gradient-custom text-white">
      <div className="container">
        <h2 className="fw-bold text-center mb-5">Projects</h2>
        <div className="row">
          {ProjectsList.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-3 pb-3">
              <div className="card h-100 shadow-sm">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.desc}</p>
                  <a
                    href={item.git_href}
                    target="_blank"
                    className="btn btn-sm btn-dark mt-2 me-2"
                  >
                    {<FaGithub />} GitHub
                  </a>
                  <a
                    href={item.project_href}
                    target="_blank"
                    className="btn btn-sm btn-outline-dark mt-2"
                  >
                    <FaLink /> Link to Project
                  </a>
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
