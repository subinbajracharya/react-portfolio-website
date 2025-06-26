import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300 ? true : false);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smoothly Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        className="btn btn-outline-white border-2 border-white rounded-circle position-fixed p-1 z-3 scrollTop"
        onClick={scrollToTop}
        style={{
          bottom: "30px",
          right: "30px",
        }}
      >
        <MdOutlineKeyboardDoubleArrowUp size={30} color={"#fff"} />
      </button>
    )
  );
};

export default ScrollToTop;
