import React from "react";
import { SearchIcon } from "./icons";

const Herosection = () => {
  return (
    <div className="flex flex-col justify-center  min-h-[100%] h-[100vh] absolute top-0 -z-10 py-[60px] px-[80px]">
      <div>
        <h1 className="text-white font-bold">
          <span className="text-[64px] leading-[64px]">Look first</span>
          <br />
          <span className="text-[64px] leading-[64px]">Then leap.</span>
        </h1>
        <div className="mt-7">
          <label class="relative block ">
            <span class="absolute left-4 top-[14px] flex items-center pl-2 bg-[#2962ff] text-white rounded-full h-[35px] w-[35px]">
              <SearchIcon />
            </span>
            <input
              type="text"
              placeholder="Search markets here"
              class="input input-bordered input-lg w-full max-w-xs rounded-full px-16 text-[#787b86] font-medium cursor-pointer"
            />
          </label>
        </div>
        <div className="mt-7">
          <button>BTCUSD</button>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
