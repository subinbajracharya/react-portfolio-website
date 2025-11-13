import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const experiences = [
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
  {
    role: "Full Stack Web Developer – Internship as a part of University Course",
    company: "ActionAid Australia",
    period: "August 2024 - November 2024",
    desc: "Collaborated in a team of 5 to develop a Microsoft PowerApps-based application for capturing event consents, integrated with Power Automate and SharePoint, and presented a successful demo to ActionAid leadership.",
    skills: [
      "PowerApps",
      "SharePoint",
      "Power Automate",
      "Microsoft Azure",
      "Agile",
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
        {/* <div className="text-center" data-aos="fade-up">
          <a
            href="/subin-bajracharya-resume.pdf"
            download="Subin_Bajracharya_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light"
          >
            View Full Resume <FaDownload />
          </a>
        </div> */}
      </Container>
    </section>
  );
};

export default Experiences;
