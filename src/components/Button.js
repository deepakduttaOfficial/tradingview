import React from "react";
import btn1 from "../assets/buttonimages/btn1.svg";

export const MdButton = (name) => {
  return (
    <>
      <button className="bg-primary px-4 py-2 text-white rounded-full cursor-pointer hover:bg-[#1e53e5] text-lg font-normal">
        {name.children}
      </button>
    </>
  );
};

export const BgButton = (name) => {
  return (
    <>
      <button className="bg-primary px-8 py-4 text-white rounded-full cursor-pointer hover:bg-[#1e53e5] text-lg font-medium font-Noto">
        {name.children}
      </button>
    </>
  );
};

export const Dynamic = () => {
  return (
    <>
      <button className="flex text-white items-center bg-[#1e222d80] py-[6px] pl-3 pr-6 rounded-[56px] hover:bg-[#1e222d] w-40">
        <img src={btn1} className="rounded-full h-7" alt="logo" />
        <div className="text-left ml-3">
          <span className="font-medium">BTCUSD</span>
          <div className="overflow-hidden h-5">
            <span className="text-red-500">-2.05%</span> <br />
            <span>-2.05%</span> <br />
            <span>-2.05%</span> <br />
          </div>
        </div>
      </button>
    </>
  );
};
