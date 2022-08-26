import React from "react";
import VerticalDivider from "../divider";
import {
  AlertIcon,
  BarsIcon,
  CompareIcon,
  IndicatorIcon,
  IndicatorTempleteIcon,
  MenuIcon,
  ReplayIcon,
} from "./icons";
import Symbolsearch from "./Stymbolsearch.js/Symbolsearch";

const Topbar = () => {
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

          <div
            aria-label="Compare-Items"
            className="tooltip tooltip-bottom "
            data-tip="Compare or add Symble"
          >
            <button className="py-[5px] px-2 hover:bg-lightGray rounded-md">
              <CompareIcon />
            </button>
          </div>
          <VerticalDivider />
          <div
            className="px-3 py-[2px] flex justify-center items-center cursor-pointer tooltip tooltip-bottom hover:bg-gray rounded-md"
            data-tip="1 day"
          >
            <span>D</span>
          </div>
          <VerticalDivider />
          <div
            aria-label="Compare-Items"
            className="tooltip tooltip-bottom "
            data-tip="Bars"
          >
            <button className="py-[5px] px-2 hover:bg-lightGray rounded-md">
              <BarsIcon />
            </button>
          </div>
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
