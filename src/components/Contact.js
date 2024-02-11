import React, { useEffect, useState } from "react";
import "../App.css";
import SlideIn from "./SlideIn";
import CompSlideIn from "./CompSlideIn";
import ContactForm from "./ContactForm";

const Contact = () => {
  const minScreenWidthForAnimation = 768; // You can adjust this value as needed
  const [isLargeScreen, setIsLargeScreen] = useState(
    window.innerWidth >= minScreenWidthForAnimation
  );

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
      <div className="flex flex-col w-full mb-10">
        <div>
          <SlideIn text="GET IN TOUCH" className="getintouch" />
          <SlideIn text="CONTACT" className="contact" />
        </div>
        {isLargeScreen ? (
          <CompSlideIn>
            <div>
              <ContactForm />
            </div>
          </CompSlideIn>
        ) : (
          <div>
            <ContactForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
