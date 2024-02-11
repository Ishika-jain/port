import React from 'react';

const SkillCard = ({ title, icon }) => {
  return (
    <div className="border border-gray-300 rounded p-4 text-center flex justify-center items-center transition-transform bg-white shadow-md w-32 h-32 mx-4 my-4 hover:scale-105">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl mb-2">{title}</h3>
    </div>
  );
};



export default SkillCard;
