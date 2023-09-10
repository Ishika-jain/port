import React from "react";
import "../App.css";
import SlideIn from "./SlideIn";
import img1 from "../assets/css.png";
import img2 from "../assets/html-92b76a73.png";
import img3 from "../assets/node-622212f5.webp";
import CompSlideIn from "./CompSlideIn";

const Skills = () => {
  return (
    <div className="h-screen bg-red-100">
      <div className="flex flex-col">
        <div>
          <SlideIn text="WHAT DO I KNOW?" className="know" />
          <SlideIn text="SKILLS" className="skills" />
        </div>
        <div className="flex justify-center">
          <CompSlideIn>
            <div className= "w-screen p-12 pl-48 pr-48" id="home">
              <div
                id="carouselExampleIndicators"
                className="carousel slide rounded-full bg-red-300 p-10 "
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner rounded-full">
                  <div className="carousel-item active">
                    <div className="d-flex justify-content-center ">
                      <img src={img1} className="w-32 img-fluid h-100" alt="..." />
                      <img src={img2} className="w-32 img-fluid h-100" alt="..." />
                      <img src={img3} className="w-32 img-fluid h-100" alt="..." />
                      <img src={img1} className="w-32 img-fluid h-100" alt="..." />
                      <img src={img1} className="w-32 img-fluid h-100" alt="..." />
                      <img src={img1} className="w-32 img-fluid h-100" alt="..." />
                      <img src={img1} className="w-32 img-fluid h-100" alt="..." />
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="d-flex justify-content-center">
                      <img src={img1} className="w-32 img-fluid h-100" alt="..." />
                      <img src={img1} className="w-32 img-fluid h-100" alt="..." />
                      <img src={img2} className="w-32 img-fluid h-100" alt="..." />
                      <img src={img3} className="w-32 img-fluid h-100" alt="..." />
                      <img src={img1} className="w-32 img-fluid h-100" alt="..." />
                      <img src={img1} className="w-32 img-fluid h-100" alt="..." />
                    </div>
                  </div>
                  {/* Add more carousel items as needed */}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </CompSlideIn>
        </div>
      </div>
    </div>
  );
};

export default Skills;
