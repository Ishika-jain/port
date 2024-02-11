import React, { useEffect, useState } from "react";
import "../App.css";
import SlideIn from "./SlideIn";
import CompSlideIn from "./CompSlideIn";
import SchoolIcon from "@mui/icons-material/School";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";

const Experience = () => {
  const minScreenWidthForAnimation = 768; // You can adjust this value as needed
  const [isLargeScreen, setIsLargeScreen] = useState(
    window.innerWidth >= minScreenWidthForAnimation
  );

  const items = [
    {
      date: "January 2024",
      event:
        "Event 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      date: "February 2024",
      event:
        "Event 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      date: "March 2024",
      event:
        "Event 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= minScreenWidthForAnimation);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="h-full" id="contact">
      <div className="flex flex-col w-full pb-10">
        <div>
          <SlideIn text="KNOW ME BETTER" className="getintouch" />
          <SlideIn text="JOURNEY" className="contact" />
        </div>

        {isLargeScreen ? (
          <CompSlideIn>
            <div className="ml-40 flex">
              <div className="flex flex-col gap-4">
                {items.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-300 rounded-full flex items-center justify-center">
                      <LaptopChromebookIcon className="text-white" />
                    </div>
                    <div className="py-1 md:py-4  border-l-4 border-red-300 pl-4">
                      <p className="text-sm font-semibold text-gray-800">
                        {item.date}
                      </p>
                      <p className="text-sm text-gray-600">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                {items.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-300 rounded-full flex items-center justify-center">
                      <SchoolIcon className="text-white" />
                    </div>
                    <div className="py-1 md:py-4  border-l-4 border-red-300 pl-4">
                      <p className="text-sm font-semibold text-gray-800">
                        {item.date}
                      </p>
                      <p className="text-sm text-gray-600">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CompSlideIn>
        ) : (
          <div className="ml-1">
             <div className="flex flex-col gap-2 md:gap-4">
                {items.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 pb-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-300 rounded-full flex items-center justify-center">
                      <LaptopChromebookIcon className="text-white" />
                    </div>
                    <div className="py-1 md:py-4  border-l-4 border-red-300 pl-4">
                      <p className="text-sm font-semibold text-gray-800">
                        {item.date}
                      </p>
                      <p className="text-sm text-gray-600">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                {items.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-300 rounded-full flex items-center justify-center">
                      <SchoolIcon className="text-white" />
                    </div>
                    <div className="py-1 md:py-4  border-l-4 border-red-300 pl-4">
                      <p className="text-sm font-semibold text-gray-800">
                        {item.date}
                      </p>
                      <p className="text-sm text-gray-600">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
