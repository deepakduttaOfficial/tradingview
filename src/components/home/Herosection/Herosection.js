import React from "react";
import { Dynamic } from "../../Button";
import { SearchIcon } from "../../icons";

const Herosection = () => {
  return (
    <div className="flex flex-col justify-center items-center md:items-start lg:items-start min-h-[100%] h-[100vh]  py-[60px] lg:px-[100px] md:px-[60px] px-10 w-full absolute top-0 ">
      <h1 className="text-white font-bold">
        <span className="text-7xl leading-[64px]">Look first</span>
        <br />
        <span className="text-7xl leading-[64px]">Then leap.</span>
      </h1>
      <div>
        <div className="mt-7">
          <label className="relative block ">
            <span className="absolute left-4 top-[14px] flex items-center pl-2 bg-[#2962ff] text-white rounded-full h-[35px] w-[35px]">
              <SearchIcon />
            </span>
            <input
              type="text"
              placeholder="Search markets here"
              className="input input-bordered input-lg w-full max-w-xs rounded-full px-16 text-[#787b86] font-medium cursor-pointer"
            />
          </label>
        </div>
        <div className="mt-7 flex space-x-4">
          <Dynamic></Dynamic>
          <Dynamic></Dynamic>
          <div className="md:block hidden">
            <Dynamic></Dynamic>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
