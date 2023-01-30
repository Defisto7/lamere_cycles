import React from "react";

import logo from "../assets/img/logo.png";
import findIcon from "../assets/icons/find.svg";
import loginIcon from "../assets/icons/login.svg";
import peopleIcon from "../assets/icons/people.svg";

const Navbar = () => {
  return (
    <div className="flex flex-col text-center sm:flex-row sm:justify-between bg-[#1B1A1F] text-[#FFFFFF] py-[29px] px-[20px] sm:px-[81px]">
      <img className="pt-[15px] px-[20px] w-[30%] h-[30%] md:w-[30%] lg:w-[18%]" src={logo} alt="logo" />
      <div className="flex justify-center p-[20px] gap-[20px] sm:gap-[25px] md:gap-[52px]">
        <p>About</p>
        <p>Shop</p>
        <p>Contact</p>
      </div>
      <div className="flex gap-[29px] justify-center">
        <img className="w-[16px]" src={findIcon} alt="" />
        <img className="w-[16px]" src={loginIcon} alt="" />
        <img className="w-[16px]" src={peopleIcon} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
