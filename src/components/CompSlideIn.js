import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CompSlideIn = ({ children }) => {
  useEffect(() => {
    const screenWidth = window.innerWidth;
    const minScreenWidthForAnimation = 500;
    if (screenWidth >= minScreenWidthForAnimation) {
      const elements = document.querySelectorAll(".comp-slide-in");

      elements.forEach((element) => {
        gsap.fromTo(
          element,
          { x: 120, opacity: 1 },
          {
            x: -80,
            opacity: 1,
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
            duration: 1,
          }
        );
      });
    }
  }, []);

  return <div className="comp-slide-in">{children}</div>;
};

export default CompSlideIn;
