import React from "react";
import { MdButton } from "../Button";
import SmNavbar from "./SmNavbar";
import LgNavbar from "./LgNavbar";
import { LogoIcon, UserIcon } from "../icons";

const Navbar = () => {
  return (
    <div class="navbar text-white py-3 lg:px-8 sm:px-4 fixed top-0 w-full z-10 bg-gradient-to-b from-[#000c1ed7] to-[#00071500]">
      <div class="navbar-start">
        <SmNavbar />
        <a href="/">
          <LogoIcon />
        </a>
      </div>

      <div class="navbar-center hidden lg:flex">
        <LgNavbar />
      </div>

      <div class="navbar-end">
        <div class="dropdown  dropdown-end">
          <button
            tabindex="0"
            className="mr-5 hover:hover:bg-[#fff3] rounded-full p-[6px] focus:bg-[#fff3]"
          >
            <UserIcon />
          </button>
          <ul
            tabindex="0"
            class="menu dropdown-content text-black py-2 shadow bg-base-100 rounded-lg w-[15rem] mt-4"
          >
            <a
              href="#"
              className="py-2  px-4 hover:bg-[#f0f3fa] text-primary w-full flex items-center"
            >
              <UserIcon />
              <span className="ml-2 pt-1">Sign in</span>
            </a>
          </ul>
        </div>
        <MdButton>Get started</MdButton>
      </div>
    </div>
  );
};

export default Navbar;
