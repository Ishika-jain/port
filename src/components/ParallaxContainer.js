import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Intro from "./Intro";
import pfp from "../assets/pfp.jpeg";
import bg from "../assets/sop.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookIcon from "@mui/icons-material/Book";

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
      className="h-screen overflow-hidden flex justify-center items-center skill ml-12"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="skill flex justify-center items-center flex-col text-black">
        <img
          className="w-32 rounded-full border-2 border-black "
          alt="pfp"
          src={pfp}
        ></img>
        <h1 className="mt-4 font-semibold text-5xl tracking-widest" style={{ fontFamily: 'Patrick Hand' }}>Ishika Jain</h1>
        <p>I'm a Full Stack Developer</p>
        <div className="flex gap-4 py-4">
            <GitHubIcon fontSize="medium" className="hover:text-red-300"/>
            <LinkedInIcon fontSize="medium" className="hover:text-red-300"/>
            <TwitterIcon fontSize="medium" className="hover:text-red-300"/>
            <BookIcon fontSize="medium" className="hover:text-red-300"/>
            <InstagramIcon fontSize="medium" className="hover:text-red-300"/>
          </div>
          <button className="bg-red-300 rounded-3xl px-4 p-2 text-2xl border-1 border-black hover:bg-white hover:text-3xl">Hire Me </button>
      </div>

      <Intro />
    </div>
  );
};

export default ParallaxContainer;
