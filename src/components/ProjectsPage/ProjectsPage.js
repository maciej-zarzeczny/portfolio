import React from "react";

import "./ProjectsPage.css";
import InstagramImage from "../../assets/images/projects/instagram_clone.png";
import SotringVisualizer from "../../assets/images/projects/sorting-visualizer.png";
import Scudetto from "../../assets/images/projects/scudetto.png";
import Polska from "../../assets/images/projects/polskalokalna.png";
import Gymino from "../../assets/images/projects/gymino-dashboard.png";
import GyminoApp from "../../assets/images/projects/gymino-app.png";
import Ballin from "../../assets/images/projects/ballin.png";

export const ProjectsPage = () => {
  return (
    <div className="projects-page" name="projects-page">
      <div className="container projects-page__content">
        <p className="text">Recent projects</p>

        <section className="projects">
          <a
            href="https://github.com/maciekz1996/instagram-clone"
            target="_blank"
            rel="noopener noreferrer"
          >
            <article className="project">
              <img src={InstagramImage} alt="Instagram clone" className="project__image" />

              <h3 className="title project__title">Instagram clone</h3>
            </article>
          </a>

          <a
            href="https://github.com/maciekz1996/sorting-visualizer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <article className="project">
              <img src={SotringVisualizer} alt="Sorting visualizer" className="project__image" />

              <h3 className="title project__title">Sorting visualizer</h3>
            </article>
          </a>

          <a
            href="https://github.com/maciekz1996/gymino-dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <article className="project">
              <img src={Gymino} alt="Gymino dashboard" className="project__image" />

              <h3 className="title project__title">Gymino dashboard</h3>
            </article>
          </a>

          <a href="https://github.com/maciekz1996/gymino" target="_blank" rel="noopener noreferrer">
            <article className="project">
              <img src={GyminoApp} alt="Gymino mobile app" className="project__image" />

              <h3 className="title project__title">Gymino mobile app</h3>
            </article>
          </a>

          <a href="https://scudetto.store" target="_blank" rel="noopener noreferrer">
            <article className="project">
              <img src={Scudetto} alt="Scudetto" className="project__image" />

              <h3 className="title project__title">Scudetto e-commerce</h3>
            </article>
          </a>

          <a href="http://polskalokalna.org.pl/" target="_blank" rel="noopener noreferrer">
            <article className="project">
              <img src={Polska} alt="Polska lokalna" className="project__image" />

              <h3 className="title project__title">Polska lokalna</h3>
            </article>
          </a>

          <a href="https://ballin.com.pl" target="_blank" rel="noopener noreferrer">
            <article className="project">
              <img src={Ballin} alt="Ballin" className="project__image" />

              <h3 className="title project__title">Ballin e-commerce</h3>
            </article>
          </a>
        </section>
      </div>
    </div>
  );
};
