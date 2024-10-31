import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-200 p-4 text-center">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs sm:text-sm">
          © {currentYear} Readlyt. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
