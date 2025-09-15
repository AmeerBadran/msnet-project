import React from "react";

const IconButton = ({ icon, size = "small" }) => {
  return (
    <button className="">
      <img
        src={icon}
        alt="icon"
        className={size === "larg" ? "w-16 h-16" : "w-10 h-10"}
      />
    </button>
  );
};

export default IconButton;
