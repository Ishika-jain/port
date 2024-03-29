import React from "react";
import "../App.css";
import SlideIn from "./SlideIn";
import SkillCard from "./SkillCard";

import CompSlideIn from "./CompSlideIn";

const skills = [
  {
    title: "React",
    icon: <i className="fab fa-react"></i>,
  },
  {
    title: "JavaScript",
    icon: <i className="fab fa-js"></i>,
  },
  {
    title: "React",
    icon: <i className="fab fa-react"></i>,
  },
  {
    title: "jsdsf",
    icon: <i className="fab fa-js"></i>,
  },
  {
    title: "asfsf",
    icon: <i className="fab fa-react"></i>,
  },
  {
    title: "JavaScrthrtjhript",
    icon: <i className="fab fa-js"></i>,
  },
  {
    title: "Reacryr5yt",
    icon: <i className="fab fa-react"></i>,
  },
  {
    title: "Javaeryy5y5Script",
    icon: <i className="fab fa-js"></i>,
  },
  {
    title: "Re45et45act",
    icon: <i className="fab fa-react"></i>,
  },
  {
    title: "JavaScrerthreipt",
    icon: <i className="fab fa-js"></i>,
  },
  {
    title: "Reaergthct",
    icon: <i className="fab fa-react"></i>,
  },
  {
    title: "JaverftghaScript",
    icon: <i className="fab fa-js"></i>,
  },
];

const Skills = () => {
  return (
    <div className="h-full pb-32">
      <div className="flex flex-col">
        <div>
          <SlideIn text="WHAT DO I KNOW?" className="know" />
          <SlideIn text="SKILLS" className="skills" />
        </div>
        <div className="">
          <CompSlideIn>
          <div className="flex w-full flex-wrap justify-center items-center">
                {skills.map((skill, index) => (
                  <SkillCard key={index} {...skill} />
                ))}
            </div>
          </CompSlideIn>
        </div>
      </div>
    </div>
  );
};

export default Skills;
