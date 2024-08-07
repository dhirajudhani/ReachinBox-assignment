import React from "react";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="text-white fixed top-0 z-50 p-2  flex border border-[#232324] w-full  bg-[#121212] justify-center">
      <div className="flex gap-x-2">
        <img src={logo} alt="" />{" "}
        <span className="text-md font-bold">REACHINBOX</span>
      </div>
    </div>
  );
};

export default Header;
