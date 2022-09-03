import React, { useState } from "react";
import { VerticalDivider } from "../divider";
import Candles from "./Candles/Candles";
import Compare from "./Compare/Compare";
import {
  AlertIcon,
  IndicatorIcon,
  IndicatorTempleteIcon,
  MenuIcon,
  ReplayIcon,
} from "./icons";
import Symbolsearch from "./Stymbolsearch.js/Symbolsearch";
import Time from "./Time/Time";

const Topbar = ({ time }) => {
  const timeValue = (timeVal) => {
    time(timeVal);
  };
  return (
    <div className="flex flex-row  bg-white">
      <div className="p-1 flex items-center ">
        <div
          aria-label="Menu"
          className="py-[5px] px-2 cursor-pointer hover:bg-lightGray indicator relative"
        >
          <MenuIcon />
          <span
            className="absolute bg-white flex justify-center items-center rounded-full text-xs p-[1px] 
          left-[27px] 
          "
          >
            <span className="bg-red-500 h-4 w-4 flex justify-center items-center rounded-full text-xs p-1 text-white">
              2
            </span>
          </span>
        </div>
        <div className="flex ml-4" aria-level="Top-bar">
          <Symbolsearch />
          <Compare />

          <VerticalDivider />
          <Time timeValue={timeValue} />
          <VerticalDivider />
          <Candles />
          <VerticalDivider />
          <div
            aria-level="Indicators"
            className="flex py-[5px] px-2 cursor-pointer hover:bg-lightGray justify-center items-center rounded-md tooltip tooltip-bottom"
            data-tip="Indicators , Metrics & Strategies"
          >
            <IndicatorIcon />
            <span className="text-black font-normal ml-1">Indicators</span>
          </div>
          <div
            aria-label="Compare-Items"
            className="tooltip tooltip-bottom "
            data-tip="Indicators Templetes"
          >
            <button className="py-[5px] px-2 hover:bg-lightGray rounded-md">
              <IndicatorTempleteIcon />
            </button>
          </div>
          <VerticalDivider />
          <div
            aria-level="Indicators"
            className="flex py-[5px] px-2 cursor-pointer hover:bg-lightGray justify-center items-center rounded-md tooltip tooltip-bottom"
            data-tip="Create alert"
          >
            <AlertIcon />
            <span className="text-black font-normal ml-1">Alert</span>
          </div>
          <div
            aria-level="Indicators"
            className="flex py-[5px] px-2 cursor-pointer hover:bg-lightGray justify-center items-center rounded-md tooltip tooltip-bottom"
            data-tip="Bar Replay"
          >
            <ReplayIcon />
            <span className="text-black font-normal ml-1">Replay</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
