import React from "react";
import { FaDownload } from "react-icons/fa";

const experiences = [
  {
    role: "Full Stack Development Program (Ongoing)",
    company: "Dented Code Academy",
    period: "2025 - Present",
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
    role: "Full Stack Web Developer – Intern",
    company: "ActionAid Australia",
    period: "2023",
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
    period: "2020 - 2022",
    desc: "Worked on high-quality front-end interfaces using modern JavaScript frameworks, translating business needs into intuitive user experiences and ensuring responsive design compatibility across devices.",
    skills: ["JavaScript", "Python", "REST API", "Wordpress", "Hubspot", "PHP"],
  },
  {
    role: "Frontend Web Developer",
    company: "Rapid Web Solutions",
    period: "2018 - 2020",
    desc: "Designed and developed user-friendly websites for clients using HTML5, CSS3, JavaScript, and Bootstrap. Maintained SEO optimization, cross-browser compatibility, and mobile responsiveness. Handled ongoing site maintenance and feature enhancements based on client feedback.",
    skills: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Tailwind"],
  },
  {
    role: "Frontend Web Designer",
    company: "Smart Solutions",
    period: "2015 - 2018",
    desc: "Designed visually appealing and functional web pages, ensuring brand consistency and usability, and gained foundational experience in responsive design and layout strategies.",
    skills: ["Adobe Illustrator", "Photoshop", "HTML", "CSS"],
  },
];
const Experiences = () => {
  return (
    <section id="experiences" className="bg-gradient-custom text-white py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-5">Experience</h2>
        <div className="row">
          {experiences.map((exp, index) => (
            <div className="col-12 mb-4" key={index}>
              <div className="p-4 bg-secondary bg-opacity-10 border-start border-4 border-info rounded-3 shadow-sm">
                <div className="row">
                  <div className="col-md-2 text-md-start text-info fw-semibold mb-2 mb-md-0">
                    {exp.period}
                  </div>
                  <div className="col-md-10">
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
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="/subin-bajracharya-resume.pdf"
            download="Subin_Bajracharya_Resume.pdf"
            className="btn btn-outline-light"
          >
            View Full Resume <FaDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
