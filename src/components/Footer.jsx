import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-4 bg-black text-white">
      <p className="mb-0">
        &copy; {currentYear} Subin Bajracharya. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
