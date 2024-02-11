import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const SkillCard = ({ title, icon }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`border border-gray-300  bg-red-300 rounded text-center flex justify-center items-center transition-transform shadow-md w-20 h-20 mx-2 my-2 hover:scale-105 ${
        isFlipped ? "transform rotateY-180 bg-blue-300" : ""
      }`}
      onMouseEnter={handleClick}
      onMouseLeave={handleClick}
    >
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div>
          i
        </div>

        <div>
       back .
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default SkillCard;
