import React from "react";
import "../App.css";
import SlideIn from "./SlideIn";

const Contact = () => {

  return (
    <div className="h-screen bg-red-100">
    <div className="flex flex-col w-full mb-10">
      <div>
        <SlideIn text="GET IN TOUCH" className="getintouch" />
        <SlideIn text="CONTACT" className="contact" />
      </div>
    
    </div>
  </div>
  );
};

export default Contact;
