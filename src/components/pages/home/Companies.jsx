// Companies.jsx
import React from "react";
import forbes from "../../../assets/forbes.png";
import netflix from "../../../assets/netflix.png";
import amazon from "../../../assets/amazon.png";
import entrepreneur from "../../../assets/entrepreneur.png";
import sej from "../../../assets/sej.png";
import CompanyCard from "../../features/CompanyCard";

const images = [forbes, netflix, amazon, entrepreneur, sej];

const Companies = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 my-10 md:my-14 px-4 md:px-10">
      {images.map((img, index) => (
        <CompanyCard key={index} imageSrc={img} />
      ))}
    </div>
  );
};

export default Companies;
