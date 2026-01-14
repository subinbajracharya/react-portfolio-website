import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "REBB TECH PTY LTD",
    period: "November 2024 - Present",
    desc: "Building and improving ERP/CRM modules by integrating React.js + Redux front-end with Node.js and Spring Boot backends via REST/GraphQL APIs. Working with PostgreSQL and Redis caching, strengthening OAuth2/JWT security, and improving CI/CD and testing with Docker/Jenkins, Jest, and React Testing Library.",
    skills: [
      "TypeScript",
      "React",
      "Redux",
      "NodeJs",
      "Spring Boot",
      "REST API",
      "PostgreSQL",
      "NestJS",
      "Docker",
    ],
  },
  {
    role: "Full Stack Web Developer",
    company: "Itonics Innovation",
    period: "July 2020 - December 2022",
    desc: "Worked on high-quality front-end interfaces using modern JavaScript frameworks, translating business needs into intuitive user experiences and ensuring responsive design compatibility across devices.",
    skills: ["JavaScript", "Python", "REST API", "Wordpress", "Hubspot", "PHP"],
  },
  {
    role: "Frontend Web Developer",
    company: "Rapid Web Solutions",
    period: "February 2018 - February 2020",
    desc: "Designed and developed user-friendly websites for clients using HTML5, CSS3, JavaScript, and Bootstrap. Maintained SEO optimization, cross-browser compatibility, and mobile responsiveness. Handled ongoing site maintenance and feature enhancements based on client feedback.",
    skills: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Tailwind"],
  },
  {
    role: "Frontend Web Designer",
    company: "Smart Solutions",
    period: "January 2015 - February 2018",
    desc: "Designed visually appealing and functional web pages, ensuring brand consistency and usability, and gained foundational experience in responsive design and layout strategies.",
    skills: ["Adobe Illustrator", "Photoshop", "HTML", "CSS"],
  },
];

const programs = [
  {
    role: "Master of Information Technology and Systems",
    company: "Victorian Institute of Technology (VIT)",
    period: "February 2023 - December 2024",
    grade: "4.95 GPA",
    desc: "Software Engineering (Graduated with Dean's Honours Roll distinction)",
    skills: [],
  },
  {
    role: "Full Stack Development Program",
    company: "Dented Code Academy",
    period: "May 2025 - November 2025",
    desc: "Participating in an immersive hands-on program focused on the MERN stack, developing full-stack applications using MongoDB, Express.js, React, and Node.js, along with exposure to Docker, Redux, and GraphQL.",
    skills: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "GraphQL",
      "Docker",
      "Redux",
      "AWS",
    ],
  },
];

const Experiences = () => {
  return (
    <section id="experiences" className="bg-gradient-custom text-white py-5">
      <Container>
        <h2 className="fw-bold text-center mb-5">Experiences</h2>
        <Row>
          {experiences.map((exp, index) => (
            <Col
              xs={12}
              className="mb-4"
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 100}
            >
              <div className="experience-card p-4 bg-secondary bg-opacity-10 border-start border-4 border-info rounded-4 shadow-sm h-100">
                <Row className="align-items-center">
                  <Col
                    xs={12}
                    md={2}
                    className="text-md-start text-info fw-semibold mb-2 mb-md-0"
                  >
                    {exp.period}
                  </Col>
                  <Col xs={12} md={10} className="text-md-start">
                    <h5 className="fw-bold mb-1">
                      {exp.role}{" "}
                      <span className="text-info fw-normal">
                        · {exp.company}
                      </span>
                    </h5>
                    <p className="text-light-50 mb-2">{exp.desc}</p>
                    <div className="d-flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="badge bg-info text-dark fw-semibold"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          ))}
        </Row>

        <h2 className="fw-bold text-center mb-5 mt-5">Education & Training</h2>
        <Row>
          {programs.map((prog, index) => (
            <Col
              xs={12}
              className="mb-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="program-card p-4 bg-secondary bg-opacity-10 border-start border-4 border-warning rounded-4 shadow-sm h-100">
                <Row className="align-items-center">
                  <Col
                    xs={12}
                    md={2}
                    className="text-md-start text-warning fw-semibold mb-2 mb-md-0"
                  >
                    {prog.period}
                    {prog.grade && (
                      <div className="small text-warning-50 mt-1">
                        {prog.grade}
                      </div>
                    )}
                  </Col>
                  <Col xs={12} md={10} className="text-md-start">
                    <h5 className="fw-bold mb-1">
                      {prog.role}{" "}
                      <span className="text-warning fw-normal">
                        · {prog.company}
                      </span>
                    </h5>
                    <p className="text-light-50 mb-2">{prog.desc}</p>
                    {prog.skills.length > 0 && (
                      <div className="d-flex flex-wrap gap-2">
                        {prog.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="badge bg-warning text-dark fw-semibold"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </Col>
                </Row>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Experiences;
