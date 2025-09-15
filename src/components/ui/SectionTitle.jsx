import React from "react";
import underLine from "../../assets/underline.svg"
const SectionTitle = ({ title }) => {
  return (
    <div className="flex flex-col items-center my-10">
      <h1 className="text-main text-[40px] font-bold leading-9">{title}</h1>
      <img src={underLine} alt="" className="w-[250px] mt-5" />
    </div>
  );
};

export default SectionTitle;
