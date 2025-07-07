import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <section id="about" className="py-5 bg-gradient-custom text-white">
      <Container>
        <div className="row align-items-center">
          <h2 className="fw-bold text-center mb-5">About Me</h2>
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src="/assets/images/portfolio-picture.jpg"
              alt="Subin Bajracharya"
              className="responsive-max-width rounded-4 shadow-sm"
            />
          </div>
          <div className="col-md-8">
            <p>
              Results-driven Software Developer with handful years of experience
              in UI development, testing, and debugging, specialising in
              e-commerce technologies. Skilled in enhancing web functionalities,
              implementing SEO, and developing responsive interfaces using
              React.js, JavaScript, and Bootstrap. Expertise in full-stack
              development with proficiency in Java frameworks and database
              management. Known for delivering high-quality solutions on time
              and collaborating effectively with teams.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
