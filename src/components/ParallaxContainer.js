import React, { useEffect, useRef } from "react";
import gsap from "gsap";
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
      className=" h-screen p-30 w-full overflow-hidden flex justify-start items-center ml-96 pl-72"
    >
      <div className="skill text-9xl">Ishika</div>

      <Intro />
    </div>
  );
};

export default ParallaxContainer;
