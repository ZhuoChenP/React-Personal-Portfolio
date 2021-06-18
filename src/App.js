import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Project from "./components/Experience";
import ProjectCard from "./components/ProjectCard";
import Skills  from "./components/Skills";
import EduAndCert from "./components/EduAndCert";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <style>{"body {background-color: #2E3440;}"}</style>
      <Header />
      <AboutMe />
      <Project />
      <ProjectCard />
      <Skills />
      <EduAndCert />
      <Footer />
    </div>
  );
}

export default App;
