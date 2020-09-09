import React, { useState, useEffect, useCallback } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdHome, MdReorder, MdWork, MdPerson } from "react-icons/md";
import ReactTooltip from "react-tooltip";
import { Link } from "react-scroll";

import "./Navbar.css";

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
          <li>
            <Link
              className="navbar__item"
              activeClass="navbar__item--active"
              to="home-page"
              spy={true}
              smooth={true}
              duration={500}
            >
              <MdHome className="title navbar__item__icon" />
              <p className="navbar__item__content">Home</p>
            </Link>
          </li>

          <li>
            <Link
              className="navbar__item"
              activeClass="navbar__item--active"
              to="skills-page"
              spy={true}
              smooth={true}
              duration={500}
            >
              <MdReorder className="title navbar__item__icon" />
              <p className="navbar__item__content">Skills</p>
            </Link>
          </li>

          <li>
            <Link
              className="navbar__item"
              activeClass="navbar__item--active"
              to="projects-page"
              spy={true}
              smooth={true}
              duration={500}
            >
              <MdWork className="title navbar__item__icon" />
              <p className="navbar__item__content">Projects</p>
            </Link>
          </li>

          <li>
            <Link
              className="navbar__item"
              activeClass="navbar__item--active"
              to="contact-page"
              spy={true}
              smooth={true}
              duration={500}
            >
              <MdPerson className="title navbar__item__icon" />
              <p className="navbar__item__content">Contact</p>
            </Link>
          </li>
        </ul>

        <ul>
          <li className="navbar__item navbar__item--icon">
            <a href="https://github.com/maciekz1996" target="_blank" rel="noopener noreferrer">
              <FaGithub data-tip="Github" />
            </a>
          </li>
          <li className="navbar__item navbar__item--icon">
            <a
              href="https://www.linkedin.com/in/maciej-zarzeczny-03636918b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn data-tip="Linkedin" />
            </a>
          </li>
        </ul>
        <ReactTooltip place="bottom" effect="solid" offset={{ bottom: 5 }} />
      </div>
    </nav>
  );
};
