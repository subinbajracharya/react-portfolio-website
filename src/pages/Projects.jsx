import React from "react";
import { FaLink, FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const ProjectsList = [
  {
    image: "/assets/images/domain-ranking-app.png",
    name: "Domain Ranking Application",
    desc: "A full-stack domain ranking comparison tool with NestJS backend (PostgreSQL + Prisma), 24-hour cached Tranco data, and interactive Nuxt 3 charts.",
    git_href: "https://github.com/subinbajracharya/domain-rank-web",
    project_href: "https://domain-rank-web.vercel.app/",
  },
  {
    image: "/assets/images/electra-hub-thumbnail.png",
    name: "Electra Hub",
    desc: "ElectraHub delivers a crisp shopping experience using React Server Components (Next.js), Tailwind CSS, image optimization, and serverless functions on Vercel.",
    git_href: "https://github.com/subinbajracharya/electrahub-customer-fe",
    project_href: "https://electrahub.vercel.app/",
  },
  {
    image: "/assets/images/lms-thumbnail.png",
    name: "Learning Management System",
    desc: "A comprehensive full-stack Library Management System built with MERN stack (MongoDB, Express, React, Node.js), featuring secure JWT authentication, book management, borrowing system with return tracking, user reviews with star ratings, and a full-featured admin dashboard.",
    git_href: "https://github.com/subinbajracharya/LMS-front",
    project_href: "",
  },
  {
    image: "/assets/images/ft-thumbnail.png",
    name: "Financial Tracker",
    desc: "A personal financial tracker web app that helps users manage income and expenses, visualize spending through interactive charts. Built with the MERN stack.",
    git_href: "https://github.com/subinbajracharya/financial-tracker-frontend",
    project_href: "https://financial-tracker-frontend-alpha.vercel.app",
  },
  {
    image: "/assets/images/recipe-generator-app-thumbnail.png",
    name: "Recipe Generator App",
    desc: "An App which allows users to search and discover meal recipes instantly by entering ingredients or dish names, fetching results from TheMealDB API.",
    git_href: "https://github.com/subinbajracharya/Recipe-generator-app",
    project_href: "https://recipe-generator-app-new.vercel.app/",
  },
];

const truncate = (text = "", max = 120) =>
  text.length > max ? text.slice(0, max).trimEnd() + "..." : text;

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-gradient-custom text-white">
      <div className="container">
        <h2 className="fw-bold text-center mb-5">Recent Projects</h2>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={3000}
          freeMode={false}
          grabCursor={true}
        >
          {ProjectsList.map((project, index) => (
            <SwiperSlide key={index} className="py-2">
              <div className="card h-100 shadow-sm overflow-hidden">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.name}
                />
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title h6" title={project.name}>
                    {truncate(project.name, 30)}
                  </h3>
                  <p
                    className="card-text"
                    title={project.desc}
                    style={{ fontSize: "0.875rem" }}
                  >
                    {truncate(project.desc, 130)}
                  </p>
                  <div className="mt-auto d-flex gap-2">
                    <a
                      href={project.git_href}
                      target="_blank"
                      className="btn btn-sm btn-dark me-2"
                    >
                      {<FaGithub />} GitHub
                    </a>
                    <a
                      href={project.project_href}
                      target="_blank"
                      className="btn btn-sm btn-outline-dark"
                    >
                      <FaLink /> Link
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
