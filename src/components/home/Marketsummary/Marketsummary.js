import React from "react";
import { RightArrow } from "../../icons";
import Tabs from "../../Tab";
import Crypto from "./Crypto";
import Indices from "./Indices";
import Stocks from "./Stocks";

const Marketsummary = () => {
  let names = ["Indices", "Stocks", "Crypto"];
  let components = [<Indices />, <Stocks />, <Crypto />];
  return (
    <>
      <div className="mt-[100px]">
        <div className="max-w-[800px] m-auto text-center text-[#131722] mb-16">
          <h1 className="text-[80px] font-semibold font-Noto">Learn</h1>
          <p className="md:text-[28px] text-[18px] font-Noto mb-16 font-normal text-[#131722] ">
            Find your tribe in our worldwide community of content creators,
            custom indicator wizards, and daily trading live streamers.
          </p>
        </div>
        <div>
          <a href="/" className="text-3xl font-bold hover:text-[#2962ff]">
            Market summary <RightArrow />
          </a>
        </div>
      </div>
      <Tabs name={names} components={components} />
    </>
  );
};

export default Marketsummary;
