import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Project from "./components/Experience";
import ProjectCard from "./components/ProjectCard";
function App() {
  return (
    <div>
      <style>{"body {background-color: #2E3440;}"}</style>
      <Header />
      <AboutMe />
      <Project />
      <ProjectCard />
    </div>
  );
}

export default App;
