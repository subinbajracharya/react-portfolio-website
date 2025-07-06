import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Connect from "./pages/Connect";
import Experiences from "./pages/Experiences";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const handleSmoothScroll = (event) => {
      const targetID = event.currentTarget.getAttribute("href");

      if (targetID.startsWith("#") && document.querySelector(targetID)) {
        event.preventDefault();
        const headerHeight = document.querySelector("nav")?.offsetHeight || 0;
        const targetPosition = document.querySelector(targetID).offsetTop;

        window.scrollTo({
          top: targetPosition - headerHeight,
          behavior: "smooth",
        });
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((anchor) =>
      anchor.addEventListener("click", handleSmoothScroll)
    );

    // Cleanup
    return () => {
      anchorLinks.forEach((anchor) =>
        anchor.removeEventListener("click", handleSmoothScroll)
      );
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navigation />

      {/* Hero Banner */}
      <Header />

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Experiences />

      {/* Projects Section */}
      <Projects />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Connect />

      {/* Footer */}
      <Footer />

      <ScrollToTop />
    </>
  );
}

export default App;
