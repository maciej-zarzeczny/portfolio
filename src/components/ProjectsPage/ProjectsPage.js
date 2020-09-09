import React from "react";

import "./ProjectsPage.css";
import ProjectImage from "../../assets/images/projects/sample_1.png";
import ProjectImage2 from "../../assets/images/projects/sample_2.png";

export const ProjectsPage = () => {
  return (
    <div className="projects-page" name="projects-page">
      <div className="container projects-page__content">
        <p className="text">Recent projects</p>

        <section className="projects">
          <article className="project">
            <img src={ProjectImage} alt="Project" className="project__image" />

            <h3 className="title project__title">Mobile app</h3>
          </article>

          <article className="project">
            <img src={ProjectImage2} alt="Project" className="project__image" />

            <h3 className="title project__title">Mobile app</h3>
          </article>

          <article className="project">
            <img src={ProjectImage} alt="Project" className="project__image" />

            <h3 className="title project__title">Mobile app</h3>
          </article>

          <article className="project">
            <img src={ProjectImage2} alt="Project" className="project__image" />

            <h3 className="title project__title">Mobile app</h3>
          </article>
        </section>
      </div>
    </div>
  );
};
