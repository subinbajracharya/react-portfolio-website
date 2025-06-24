import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Header = () => {
  const element = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    typedInstance.current = new Typed(element.current, {
      strings: [
        // List of strings to display one after another
        "Hi, I'm Subin Bajracharya",
        "Software Developer",
        "Crafting Modern Web Experiences",
      ],
      typeSpeed: 60, // Speed of typing each character (in milliseconds)
      backSpeed: 40, // Speed of deleting each character (in milliseconds)
      backDelay: 1800, // Delay before backspacing begins (in milliseconds)
      loop: true, // Loop the animation indefinitely
    });

    return () => typedInstance.current.destroy(); // Cleanup
  }, []);

  return (
    <header
      className="vh-100 d-flex align-items-center text-white hero-banner"
      style={{
        background:
          "url('/assets/images/hero-banner.png') center/cover no-repeat",
      }}
    >
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h1 className="display-4 fw-bold">
              <span ref={element}></span>
            </h1>
            <p className="lead">Turning ideas into reality through code.</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
