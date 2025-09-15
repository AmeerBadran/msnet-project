import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1920px] mx-auto">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default RootLayout;
