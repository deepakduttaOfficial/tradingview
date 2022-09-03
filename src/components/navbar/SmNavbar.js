import React from "react";
import { Link } from "react-router-dom";
import {
  CommunityIcon,
  MarketIcon,
  NavmenuIcon,
  ProductIcon,
  RightArrow,
} from "../icons";

const SmNavbar = () => {
  return (
    <>
      <div className="dropdown ">
        <label
          tabIndex="0"
          className="cursor-pointer relative rounded-full mt-2 mr-2 h-[20px] w-[20px] p-5 inline-block hover:bg-[#fff3] focus:bg-[#fff3] lg:hidden"
        >
          <div className="absolute left-[11px] top-[14px]">
            <NavmenuIcon />
          </div>
        </label>
        <ul
          tabIndex="0"
          className="menu menu-compact dropdown-content mt-3 py-2 shadow bg-base-100 rounded-md text-black w-[18rem]"
        >
          <li className="w-full">
            <a href="/" className="py-[10px] px-4 hover:bg-[#f0f3fa] w-full">
              <ProductIcon />
              <div className="ml-2">
                <span className="font-medium text-lg">Products</span>
              </div>
            </a>
          </li>
          <li tabIndex="0" className="w-full">
            <span className="py-[10px] px-4 hover:bg-[#f0f3fa] w-full">
              <CommunityIcon />
              <div className="ml-2 grow ">
                <span className="font-medium text-lg">Community</span>
              </div>
              <RightArrow />
            </span>
            <ul className="py-2 bg-white w-[15rem] rounded-md">
              <a href="/" className="py-[10px] px-4 hover:bg-[#f0f3fa] w-full">
                <div className="ml-2">
                  <span className="font-medium text-lg">Test Mode</span>
                </div>
              </a>
              <a href="/" className="py-[10px] px-4 hover:bg-[#f0f3fa] w-full">
                <div className="ml-2">
                  <span className="font-medium text-lg">Test Mode</span>
                </div>
              </a>
            </ul>
          </li>
          <li className="w-full">
            <Link
              to="/chart"
              className="py-[10px] px-4 hover:bg-[#f0f3fa] w-full"
            >
              <MarketIcon />
              <div className="ml-2 grow">
                <span className="font-medium text-lg ">Chart+</span>
              </div>
              <RightArrow />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SmNavbar;
