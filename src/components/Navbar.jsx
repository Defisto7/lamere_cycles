import React from "react";

import logo from "../assets/img/logo.png";
import findIcon from "../assets/icons/find.svg";
import loginIcon from "../assets/icons/login.svg";
import peopleIcon from "../assets/icons/people.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-[#1B1A1F] text-[#FFFFFF] py-[29px] px-[81px]">
      <img className="" src={logo} alt="logo" />
      <div className="flex gap-[52px]">
        <p>About</p>
        <p>Shop</p>
        <p>Contact</p>
      </div>
      <div className="flex gap-[29px]">
        <img src={findIcon} alt="" />
        <img src={loginIcon} alt="" />
        <img src={peopleIcon} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
