import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-neutral-900 text-neutral-200 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl md:text-4xl font-bold hover:text-neutral-400 transition-colors duration-300"
        >
          Readlyt
        </Link>

        <Link
          to="/how-it-works"
          className="
                px-4 py-2 
                bg-neutral-200 text-neutral-900 
                font-bold rounded 
                hover:bg-neutral-900 hover:text-neutral-200 
                transition-colors duration-300 
                text-base 
                block md:inline-block 
                text-center 
                mt-2 md:mt-0 md:ml-4
              "
          onClick={() => setIsMenuOpen(false)}
        >
          How It Works
        </Link>
      </div>
    </header>
  );
};

export default Header;
