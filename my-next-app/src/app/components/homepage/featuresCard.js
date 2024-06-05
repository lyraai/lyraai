// components\homepage\featuresCard.js
import React from 'react';

const FeaturesCard = ({ title, description }) => {
  return (
    <div className="w-[350px] h-[425px] p-10 bg-teal-500 rounded-[30px] flex-col justify-between items-start inline-flex">
      <div className=" text-white text-[38px] font-semibold font-['Inter'] leading-[40px]">
        {title}
      </div>
      <div className=" text-white text-base font-regular font-['Inter'] leading-tight">
        {description}
      </div>
    </div>
  );
};

export default FeaturesCard;
