import React from "react";
import { FaCode, FaMobileAlt, FaDatabase } from "react-icons/fa";
import { Link } from "react-scroll";

import "./SkillsPage.css";

export const SkillsPage = () => {
  const frontendSkills = ["HTML", "CSS", "SASS", "JavaScript", "React", "Redux"];
  const mobileSkills = ["Flutter", "Firebase"];
  const backendSkills = ["PHP", "Python", "Laravel", "MySQL"];

  const renderedFrontendSkills = frontendSkills.map((skill, idx) => (
    <p key={idx} className="text skill-card__skills__item">
      {skill}
    </p>
  ));

  const renderedMobileSkills = mobileSkills.map((skill, idx) => (
    <p key={idx} className="text skill-card__skills__item">
      {skill}
    </p>
  ));

  const renderedBackendSkills = backendSkills.map((skill, idx) => (
    <p key={idx} className="text skill-card__skills__item">
      {skill}
    </p>
  ));

  return (
    <div className="skills-page" name="skills-page">
      <div className="container skills-page__content">
        <section className="skills">
          <article className="skill-card">
            <header>
              <h3 className="title skill-card__title skill-card__title--accent">Frontend</h3>
              <FaCode className="title skill-card__icon skill-card__icon--accent" />
            </header>

            <section className="skill-card__skills">{renderedFrontendSkills}</section>
          </article>

          <article className="skill-card">
            <header>
              <h3 className="title skill-card__title">Mobile</h3>
              <FaMobileAlt className="title skill-card__icon" />
            </header>

            <section className="skill-card__skills">{renderedMobileSkills}</section>
          </article>

          <article className="skill-card">
            <header>
              <h3 className="title skill-card__title">Backend</h3>
              <FaDatabase className="title skill-card__icon" />
            </header>

            <section className="skill-card__skills">{renderedBackendSkills}</section>
          </article>
        </section>

        <section className="introduction">
          <p className="text">Introduction</p>
          <h1 className="header introduction__title">
            Hello! I'm Dev <br /> Hustle
          </h1>

          <p className="text introduction__content">
            I started programming 5 years ago. At first I was developing native mobile applications
            and games for Android and iOS platforms. Then I started shifting towards web
            development. During first years of my web developer career I was working on several
            projects as a Fullstack developer. right now I’m focusing solely on Frontend development
            with React, however I believe that my backend experience is a big advantage when
            cooperating with other backend developers on a project. Now I’m also developing hybrid
            mobile applications for both Android and iOS using Flutter.
            <br />
            <br />
            During my career I developed several mobile applications and websites for clients as a
            freelancer, but I am also constantly improving my skills by creating my own projects.
            For a year and 8 months I was working as a software developer at Vendim company where I
            was responsible for developing UI’s and REST API’s for modern vending machines.{" "}
          </p>

          <button className="button">
            <Link to="projects-page" spy={true} smooth={true} duration={500}>
              See projects
            </Link>
          </button>
        </section>
      </div>
    </div>
  );
};
