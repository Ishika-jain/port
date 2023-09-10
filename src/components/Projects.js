import React, { useState } from "react";
import "../App.css";
import SlideIn from "./SlideIn";
import CompSlideIn from "./CompSlideIn";
import Card from "./Card";

const Projects = ({ data }) => {
  const [projectCategory, setProjectCategory] = useState(0);

  return (
    <div className="h-screen bg-red-100">
      <div className="flex flex-col w-full">
        <div>
          <SlideIn text="WHAT HAVE I BUILT?" className="built" />
          <SlideIn text="PROJECTS" className="projects" />
        </div>
        <CompSlideIn>
          <div>
            <div className="flex flex-col w-screen justify-center items-center">
              <div className="flex w-3/4  mb-10 justify-evenly rounded-full object-contain items-center overflow-hidden ">
                <button
                  className={` p-3 text-xl w-full bg-red-300  border-r border-black ${
                    projectCategory === 0 ? "activetab" : ""
                  }`}
                  onClick={() => setProjectCategory(0)}
                >
                  Frontend
                </button>
                <button
                  className={` p-3 text-xl w-full bg-red-300 border-r border-black  ${
                    projectCategory === 1 ? "activetab" : ""
                  }`}
                  onClick={() => setProjectCategory(1)}
                >
                  Backend
                </button>
                <button
                  className={` p-3 text-xl w-full bg-red-300 border-r border-black  ${
                    projectCategory === 2 ? "activetab" : ""
                  }`}
                  onClick={() => setProjectCategory(2)}
                >
                  Full Stack
                </button>
              </div>
              <div className="flex ">
                {data[projectCategory].map((item) => (
                  <div key={item.id}>
                    <Card item={item}></Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CompSlideIn>
      </div>
    </div>
  );
};

export default Projects;
