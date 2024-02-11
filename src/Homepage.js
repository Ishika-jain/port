import React from "react";
import "./App.css";
import Aboutme from "./components/Aboutme";
import Contact from "./components/Contact";
import ParallaxContainer from "./components/ParallaxContainer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import data from "./data";

const Homepage = () => {
  return (
    <div className="ml-36">
        <ParallaxContainer />
        <Aboutme />
        <Skills />
        <Projects data={data} />
        <Contact />
    </div>
  );
};

export default Homepage;
