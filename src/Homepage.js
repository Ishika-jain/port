import React from "react";
import "./App.css";
import Aboutme from "./components/Aboutme";
import ParallaxContainer from "./components/ParallaxContainer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import data from "./data";
import Experience from "./components/Experience";
import Awards from "./components/Awards";

const Homepage = () => {
  return (
    <div className="bg-blue-50 sm:max-w-screen-2xl">
      <ParallaxContainer />
      <div className=" ml-16  md:ml-40  sm:max-w-screen-2xl ">
        <Aboutme />
        <Experience />
        <Awards />
        <Projects data={data} />
        <Skills />
      </div>
    </div>
  );
};

export default Homepage;
