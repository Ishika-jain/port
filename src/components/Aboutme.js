import React from "react";
import "../App.css";
import SlideIn from "./SlideIn";
import CompSlideIn from "./CompSlideIn";
import ish from "../assets/ish.jpg";

const Aboutme = () => {
  return (
    <div className="h-full bg-red-100">
      <div className="flex flex-col w-full">
        <div>
          <SlideIn text="INTRODUCTION" className="intro" />
          <SlideIn text="ABOUT ME" className="def" />
        </div>
          <CompSlideIn>
        <div className="flex md:flex-row lg:flex-row sm:flex-row flex-col p-4 md:p-15 md:pb-20 lg:pl-32 lg:pr-32">
            <div className="sm:w-1/2 md:2/3 lg:w-1/4 w-full p-2 m-2 mt-1 flex justify-center items-center shadow-lg shadow-slate-600">
              <img src={ish} alt="Ish" className="h-44 sm:h-80" />
            </div>
            <div className="sm:w-1/2 md:1/3 lg:w-3/4 w-2/2 w-full md:text-lg text-sm md:p-8 m-2 mt-1">
              <p>
                Hello, I'm Ishika Jain, a 20-year-old front-end developer based in Bangalore, India. My passion lies in crafting seamless user experiences through pixel-perfect designs. Brimming with a surplus of ideas, I channel them into creating captivating websites and weaving poetic narratives. Welcome to my world of code and creativity!
              </p>
              <p>
                My passion lies in crafting seamless user experiences through pixel-perfect designs. Brimming with a surplus of ideas, I channel them into creating captivating websites and weaving poetic narratives. Welcome to my world of code and creativity!
              </p>
              <p>Welcome to my world of code and creativity!</p>
            </div>
        </div>
          </CompSlideIn>
      </div>
    </div>
  );
};

export default Aboutme;
