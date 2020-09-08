import React from "react";
import "./App.css";

import { Navbar } from "./components/Navbar/Navbar";
import { HomePage } from "./components/HomePage/HomePage";
import { SkillsPage } from "./components/SkillsPage/SkillsPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <SkillsPage />
    </div>
  );
}

export default App;
