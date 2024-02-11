import React, { useState } from "react";

const Card = ({ item }) => {
  const { first_name, last_name, gender, image_url } = item;
  const [showButtons, setShowButtons] = useState(false);

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };

  return (
    <div className="flex flex-col w-32 md:w-96 h-72 ">
      <div
        className={`max-w-md rounded overflow-hidden shadow-lg h-fit bg-yellow-100 transition-transform transform ${
          showButtons ? "scale-105 " : ""
        }`}
        onMouseEnter={toggleButtons}
        onMouseLeave={toggleButtons}
      >
        <img
          className=" object-cover"
          src={image_url}
          alt={`${first_name} ${last_name}`}
        />
        <div className="p-2">
          <div className="font-bold text-xl mb-2 p-2">
            {first_name} {last_name}
          </div>
          <p className="text-gray-700 text-base">{gender}</p>
        </div>
        
        {showButtons && (
          <div className="absolute top-0 left-0 right-0 z-50 bottom-0 flex justify-center items-center bg-white opacity-90">
            <a
              href="https://www.google.com"
              
              className="p-2 bg-blue-500 text-white mr-2 " style={{}} rel="noreferrer"
            >
              Google
            </a>
            <a
              href="https://www.youtube.com"
              className="p-2 bg-yellow-500 text-white"
            >
              YouTube
            </a>
          </div>
        )}
        
      </div>
      <div className="font-bold text-xl mb-2">
      {first_name}  {first_name} {last_name} {first_name} {last_name} {first_name} {last_name} {first_name} {last_name}
          </div>
    </div>
  );
};

export default Card;
