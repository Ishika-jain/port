import React, { useEffect, useState } from "react";
import "../App.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`z-50 fixed flex flex-col left-0 h-full text-xl font-semibold justify-around w-32 text-white ${
        isScrolled ? "text-black bg-white border-r-2" : "text-white"
      }`}
    >
      <div
        className={`text-center ${isScrolled ? "text-black " : "text-white"}`}
      >
        Lgogo
      </div>
      <ul className="flex flex-col w-full items-center justify-around text-3xl pl-0 h-3/6">
        <li>
          <a href="/" className="hover:bg-red-400 no-underline">
            <i
              className={`icon-home ${
                isScrolled ? "text-black" : " text-white"
              }`}
            ></i>
          </a>
        </li>
        <li>
          <a href="/#about" className="hover:underline no-underline">
            <i
              className={`icon-user ${
                isScrolled ? "text-black" : " text-white"
              }`}
            ></i>
          </a>
        </li>
        <li>
          <a href="/#projects" className="hover:underline no-underline">
            <i
              className={`icon-briefcase ${
                isScrolled ? "text-black" : " text-white"
              }`}
            ></i>
          </a>
        </li>
        <li>
          <a href="/#achievements" className="hover:underline no-underline">
            <i
              className={`icon-trophy ${
                isScrolled ? "text-black" : " text-white"
              }`}
            ></i>
          </a>
        </li>
        <li>
          <a href="/#contact" className="hover:underline no-underline">
            <i
              className={`icon-bubbles ${
                isScrolled ? "text-black" : " text-white"
              }`}
            ></i>
          </a>
        </li>
      </ul>
      <div
        className={`-rotate-90 text-center ${isScrolled ? "text-black " : "text-white"}`}
      >
        2023 - 2024.{" "}
      </div>
    </nav>
  );
};

export default Navbar;
