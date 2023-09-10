import React, { useState } from "react";

const Card = ({ item }) => {
  const { id, first_name, last_name, gender, image_url } = item;
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="flex flex-col p-8">
      <div
        className={`max-w-xs rounded overflow-hidden shadow-lg bg-white w-96 ${
          showMore ? "opacity-50" : ""
        }`}
        onMouseEnter={() => setShowMore(true)}
        onMouseLeave={() => setShowMore(false)}
        onClick={toggleShowMore}
      >
        <img
          className="w-full h-32 object-cover"
          src={image_url}
          alt={`${first_name} ${last_name}`}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {first_name} {last_name}
          </div>
          <p className="text-gray-700 text-base">{gender}</p>
          {showMore && (
            <p className="text-gray-700 text-sm mt-2">
              Click to see more information
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
