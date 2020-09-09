import React from "react";
import "./App.css";

import { Navbar } from "./components/Navbar/Navbar";
import { HomePage } from "./components/HomePage/HomePage";
import { SkillsPage } from "./components/SkillsPage/SkillsPage";
import { ProjectsPage } from "./components/ProjectsPage/ProjectsPage";
import { ContactPage } from "./components/ContactPage/ContactPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <SkillsPage />
      <ProjectsPage />
      <ContactPage />
    </div>
  );
}

export default App;
