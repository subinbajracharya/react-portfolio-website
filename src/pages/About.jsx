import React from "react";

const About = () => {
  return (
    <section id="about" className="py-5 bg-light text-dark">
      <div className="container">
        <div className="row align-items-center">
          <h2 className="text-center mb-4">About Me</h2>
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src="./src/assets/images/portfolio-picture.jpg"
              alt="Subin Bajracharya"
              className="img-fluid rounded-circle shadow-sm"
              style={{ maxWidth: "250px" }}
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
      </div>
    </section>
  );
};

export default About;
