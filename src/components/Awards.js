import React, { useEffect, useState } from "react";
import "../App.css";
import SlideIn from "./SlideIn";
import CompSlideIn from "./CompSlideIn";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Awards = () => {
  const minScreenWidthForAnimation = 768; // You can adjust this value as needed
  const [isLargeScreen, setIsLargeScreen] = useState(
    window.innerWidth >= minScreenWidthForAnimation
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed to 5 seconds (5000 milliseconds)
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

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
    <div className="h-full mb-20" id="contact">
      <div className="flex flex-col w-full pb-10">
        <div>
          <SlideIn text="WHAT HAVE I WON?" className="getintouch" />
          <SlideIn text="AWARDS" className="contact" />
        </div>

        {isLargeScreen ? (
          <CompSlideIn>
            <div className="ml-12">
              <Slider {...settings}>
                <div className="p-4">
                  <div className="bg-blue-300 rounded-lg p-6">
                    <h3 className="text-xl font-semibold">Card 1</h3>
                    <p>This is a sample card.</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="bg-blue-300 rounded-lg p-6">
                    <h3 className="text-xl font-semibold">Card 2</h3>
                    <p>This is another sample card.</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="bg-blue-300 rounded-lg p-6">
                    <h3 className="text-xl font-semibold">Card 3</h3>
                    <p>This is yet another sample card.</p>
                  </div>
                </div>
              </Slider>
            </div>
          </CompSlideIn>
        ) : (
          <div>
            <div className="">
              <Slider {...settings}>
                <div className="p-4">
                  <div className="bg-blue-300 rounded-lg p-6">
                    <h3 className="text-xl font-semibold">Card 1</h3>
                    <p>This is a sample card.</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="bg-blue-300 rounded-lg p-6">
                    <h3 className="text-xl font-semibold">Card 2</h3>
                    <p>This is another sample card.</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="bg-blue-300 rounded-lg p-6">
                    <h3 className="text-xl font-semibold">Card 3</h3>
                    <p>This is yet another sample card.</p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Awards;
