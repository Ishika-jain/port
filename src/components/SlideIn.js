import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SlideIn = ({ text, className }) => {
  useLayoutEffect(() => {
    const element = document.querySelector(`.${className}`);
    if (element) {
      gsap.fromTo(
        element,
        { x: -100, opacity: 0 }, 
        {
          x: 50, 
          opacity: 1,
          scrollTrigger: {
            trigger: element,
            start: 'top bottom', 
            scrub: true,
          },
          duration: 0.5,
        }
      );
    }
  }, [className]);

  return <div className={className}>{text}</div>;
};

export default SlideIn;