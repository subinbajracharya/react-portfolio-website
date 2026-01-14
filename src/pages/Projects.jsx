import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    image: "/assets/images/domain-ranking-app.png",
    name: "Domain Ranking Application",
    desc: "A full-stack domain ranking comparison tool with NestJS backend (PostgreSQL + Prisma), 24-hour cached Tranco data, and interactive Nuxt 3 charts.",
    git_href: "https://github.com/subinbajracharya/domain-rank-web",
    project_href: "https://domain-rank-web.vercel.app/",
    tech: ["Nest.js", "PostgreSQL", "Prisma", "Nuxt 3", "Bootstrap5"],
  },
  {
    image: "/assets/images/electra-hub-thumbnail.png",
    name: "Electra Hub",
    desc: "ElectraHub delivers a crisp shopping experience using React Server Components (Next.js), Tailwind CSS, image optimization, and serverless functions on Vercel.",
    git_href: "https://github.com/subinbajracharya/electrahub-customer-fe",
    project_href: "https://electrahub.vercel.app/",
    tech: ["Next.js", "Express", "Tailwind", "Mongoose", "Stripe"],
  },
  {
    image: "/assets/images/lms-thumbnail.png",
    name: "Learning Management System",
    desc: "A comprehensive full-stack Library Management System built with MERN stack (MongoDB, Express, React, Node.js), featuring secure JWT authentication, book management, borrowing system with return tracking, user reviews with star ratings, and a full-featured admin dashboard.",
    git_href: "https://github.com/subinbajracharya/LMS-front",
    project_href: "",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
  },
  {
    image: "/assets/images/ft-thumbnail.png",
    name: "Financial Tracker",
    desc: "A personal financial tracker web app that helps users manage income and expenses, visualize spending through interactive charts. Built with the MERN stack.",
    git_href: "https://github.com/subinbajracharya/financial-tracker-frontend",
    project_href: "https://financial-tracker-frontend-alpha.vercel.app",
    tech: ["React", "Redux", "MongoDB", "Chart.js"],
  },
  {
    image: "/assets/images/recipe-generator-app-thumbnail.png",
    name: "Recipe Generator App",
    desc: "An App which allows users to search and discover meal recipes instantly by entering ingredients or dish names, fetching results from TheMealDB API.",
    git_href: "https://github.com/subinbajracharya/Recipe-generator-app",
    project_href: "https://recipe-generator-app-new.vercel.app/",
    tech: ["React", "TheMealDB API", "Axios", "CSS3"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-gradient-custom text-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="section-badge mb-3 d-inline-block">
            My Portfolio
          </span>
          <h2 className="fw-bold mb-3">Recent Projects</h2>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={26}
          loop={true}
          // autoplay={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={3000}
          freeMode={false}
          grabCursor={true}
          breakpoints={{
            576: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 26,
            },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide
              key={index}
              className="py-2"
              style={{ height: "auto" }}
            >
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
