import React from "react";
import { FaLinkedin, FaEnvelope, FaFacebook, FaGithub } from "react-icons/fa";

const ConnectList = [
  {
    href: "https://github.com/subinbajracharya",
    icon: <FaGithub size={32} />,
  },
  {
    href: "https://www.linkedin.com/in/subin-bajracharya/",
    icon: <FaLinkedin size={32} />,
  },
  {
    href: "mailto:linussbajracharya@gmail.com",
    icon: <FaEnvelope size={32} />,
  },
  {
    href: "https://www.facebook.com/subin.bajracharya.71/",
    icon: <FaFacebook size={32} />,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-dark text-white text-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-4">Connect with Me</h2>
            <div className="d-flex justify-content-center flex-wrap gap-4">
              {ConnectList.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  className="text-white fs-3"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
