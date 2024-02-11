import React from "react";
import "../App.css";
import SlideIn from "./SlideIn";
import CompSlideIn from "./CompSlideIn";
import ish from "../assets/ish.jpg";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import PeopleIcon from "@mui/icons-material/People";
import CoffeeIcon from "@mui/icons-material/Coffee";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const Aboutme = () => {
  return (
    <div className="h-full" id="about">
      <div className="flex flex-col">
        <div>
          <SlideIn text="WHO AM I?" className="intro" />
          <SlideIn text="ABOUT ME" className="def" />
        </div>
        <CompSlideIn>
          <div className="flex flex-col p-4 md:p-15 md:pb-20 lg:pl-32 lg:pr-32">
            <div className="flex flex-row sm:flex-col justify-around">
              <div className="w-full md:w-2/3 md:text-lg text-sm p-4 mt-1 bg-white rounded-xl shadow-xl shadow-gray-400 flex">
                <div>
                  <p className="pr-4">
                    Hello, I'm Ishika Jain, a 21-year-old front-end developer
                    based in Bangalore, India. Brimming with a surplus of ideas,
                    I channel them into creating captivating websites and
                    weaving poetic narratives. Welcome to my world of code and
                    creativity!
                  </p>
                  <button className="px-4 bg-red-300 rounded-full p-2">
                    Download Resume
                  </button>
                </div>
                <div className="w-2/3 p-1 h-full">
                  <div className="flex flex-col gap-4">
                    <div className="rounded">
                      <div className=" font-semibold flex justify-between ">
                        <div>Head</div>
                        <div>50%</div>
                      </div>
                      <div className="bg-blue-50 h-2 rounded-full relative">
                        <div
                          className="bg-red-300 h-full rounded-full"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="rounded ">
                      <div className=" font-semibold flex justify-between">
                        <div>Head</div>
                        <div>50%</div>
                      </div>
                      <div className="bg-blue-50 h-2 rounded-full relative">
                        <div
                          className="bg-yellow-300 h-full rounded-full"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="rounded ">
                      <div className=" font-semibold flex justify-between">
                        <div>Head</div>
                        <div>50%</div>
                      </div>
                      <div className="bg-blue-50 h-2 rounded-full relative">
                        <div
                          className="bg-blue-300 h-full rounded-full"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-row gap-8 md:gap-32 flex-wrap mt-20 w-full justify-center items-center h-full">
              <div className="flex justify-center items-center">
                <WhatshotIcon fontSize="large" className="mr-4" />
                <div>
                  <h3>298</h3>
                  <p>Projects</p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <CoffeeIcon fontSize="large" className="mr-4" />
                <div>
                  <h3>298</h3>
                  <p>Projects</p>
                </div>
              </div>{" "}
              <div className="flex justify-center items-center">
                <PeopleIcon fontSize="large" className="mr-4" />
                <div>
                  <h3>298</h3>
                  <p>Projects</p>
                </div>
              </div>{" "}
              <div className="flex justify-center items-center">
                <EmojiEventsIcon fontSize="large" className="mr-4" />
                <div>
                  <h3>298</h3>
                  <p>Projects</p>
                </div>
              </div>
            </div>
          </div>
        </CompSlideIn>
      </div>
    </div>
  );
};

export default Aboutme;
