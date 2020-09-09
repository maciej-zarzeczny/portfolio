import React, { useState, useEffect, useCallback } from "react";

import "./Navbar.css";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdHome, MdReorder, MdWork, MdPerson } from "react-icons/md";

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
          <li className="navbar__item navbar__item--active">
            <MdHome className="title navbar__item__icon" />
            <p className="navbar__item__content">Home</p>
          </li>

          <li className="navbar__item">
            <MdReorder className="title navbar__item__icon" />
            <p className="navbar__item__content">Skills</p>
          </li>

          <li className="navbar__item">
            <MdWork className="title navbar__item__icon" />
            <p className="navbar__item__content">Projects</p>
          </li>

          <li className="navbar__item">
            <MdPerson className="title navbar__item__icon" />
            <p className="navbar__item__content">Contact</p>
          </li>
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
