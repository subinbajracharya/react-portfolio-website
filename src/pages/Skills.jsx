import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNode,
  FaGithub,
  FaBootstrap,
  FaDocker,
  FaPython,
  FaPhp,
  FaAws,
} from "react-icons/fa6";
import { Container } from "react-bootstrap";
import { IoLogoJavascript } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const skillArray = [
  { name: "HTML5", icon: <FaHtml5 size={32} /> },
  { name: "CSS3", icon: <FaCss3Alt size={32} /> },
  { name: "JavaScript", icon: <IoLogoJavascript size={32} /> },
  { name: "React", icon: <FaReact size={32} /> },
  { name: "Node.js", icon: <FaNode size={32} /> },
  { name: "GitHub", icon: <FaGithub size={32} /> },
  { name: "Bootstrap", icon: <FaBootstrap size={32} /> },
  { name: "Docker", icon: <FaDocker size={32} /> },
  { name: "Python", icon: <FaPython size={32} /> },
  { name: "PHP", icon: <FaPhp size={32} /> },
  { name: "AWS", icon: <FaAws size={32} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-5 bg-gradient-custom text-white">
      <Container>
        <h2 className="fw-bold text-center mb-5">Skills</h2>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={3000}
          freeMode={true}
          grabCursor={true}
        >
          {skillArray.map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="d-flex flex-column align-items-center">
                {skill.icon}
                <p className="mt-2">{skill.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Skills;
