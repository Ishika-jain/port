import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import css from "../assets/css.png";
import github from "../assets/github-6c15ddce.png";
import html from "../assets/html-92b76a73.png";
import react from "../assets/reactjs-966214a8.png";
import java from "../assets/java-714321be.png";
import node from "../assets/node-622212f5.webp";
import Intro from "./Intro";

const ParallaxContainer = () => {
  const containerRef = useRef(null);

 

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseMove = (e) => {
      const relX = e.clientX - container.getBoundingClientRect().left;
      const relY = e.clientY - container.getBoundingClientRect().top;

      const maxX = container.offsetWidth;
      const maxY = container.offsetHeight;

      const newX = (relX / maxX - 0.5) * 30;
      const newY = (relY / maxY - 0.5) * 30;

      gsap.to(".skill", {
        duration: 1,
        x: newX,
        y: newY,
        ease: "power3.out",
      });
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen p-30 w-full overflow-hidden bg-red-100"
    >
      <div className="bg-green-400">
        <div className="block w-10 skill absolute top-0 left-30">Ishika</div>
        <div className="block w-10 skill absolute bottom-0 left-30">Ishika</div>
      </div>

      <Intro />
    </div>
  );
};

export default ParallaxContainer;
