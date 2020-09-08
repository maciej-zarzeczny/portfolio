import React, { useState, useEffect, useCallback } from "react";

import "./Navbar.css";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const Navbar = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY < 100) {
      if (isMinimized) setIsMinimized(false);
    } else {
      if (!isMinimized) setIsMinimized(true);
    }
  }, [isMinimized]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <nav className={`nav ${isMinimized ? "nav--minimized" : ""}`}>
      <div className="container navbar">
        <ul>
          <li className="navbar__item navbar__item--active">About</li>
          <li className="navbar__item">Skills</li>
          <li className="navbar__item">Projects</li>
          <li className="navbar__item">Contact</li>
        </ul>

        <ul>
          <li className="navbar__item navbar__item--icon">
            <FaGithub />
          </li>
          <li className="navbar__item navbar__item--icon">
            <FaLinkedinIn />
          </li>
        </ul>
      </div>
    </nav>
  );
};
