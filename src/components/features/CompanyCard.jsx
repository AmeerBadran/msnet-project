// CompanyCard.jsx
import React from "react";

const CompanyCard = ({ imageSrc }) => {
  return (
    <div className="w-full sm:w-[250px] md:w-[300px] lg:w-[320px] h-[150px] md:h-[180px] lg:h-[195px] rounded-tr-[26px] rounded-bl-[26px] rounded-tl-[87px] rounded-br-[87px] inset-shadow-2xs shadow-xl flex items-center justify-center bg-white">
      <img
        src={imageSrc}
        alt="Company Logo"
        className="w-3/4 h-20 md:h-24 object-contain"
      />
    </div>
  );
};

export default CompanyCard;
