import React from "react";
import Cursor from "./cursor/Cursor";
import {
  BrushIcon,
  FilterIcon,
  PatternIcon,
  PredictionIcon,
  RightIncon,
  TextIcon,
  TrendLineIcon,
} from "./icons";
import Trendline from "./trendline/Trendline";

const Sidebar = () => {
  return (
    <div className="bg-white w-[52px] flex flex-col items-center px-[1px] py-2 rounded-r-md  h-[92vh]">
      <div>
        <Cursor />
        <Trendline />

        {/* <div
          aria-label="Filter"
          className="flex justify-center items-center group relative mt-1"
        >
          <div className="hover:bg-lightGray p-1 rounded-md group">
            <FilterIcon />
          </div>
          <div
            className="invisible  group-hover:visible ml-[1px] absolute -right-1 group-hover:-right-[5px] hover:bg-lightGray hover:pl-1 rounded-md h-full flex items-center delay-150 tooltip tooltip-right"
            data-tip="Gann and Fibonacci Tools"
          >
            <RightIncon />
          </div>
        </div>

        <div
          aria-label="Filter"
          className="flex justify-center items-center group relative mt-1"
        >
          <div className="hover:bg-lightGray p-1 rounded-md group">
            <BrushIcon />
          </div>
          <div
            className="invisible  group-hover:visible ml-[1px] absolute -right-1 group-hover:-right-[5px] hover:bg-lightGray hover:pl-1 rounded-md h-full flex items-center delay-150 tooltip tooltip-right"
            data-tip="Brush"
          >
            <RightIncon />
          </div>
        </div>

        <div
          aria-label="Text"
          className="flex justify-center items-center group relative mt-1"
        >
          <div className="hover:bg-lightGray p-1 rounded-md group">
            <TextIcon />
          </div>
          <div
            className="invisible  group-hover:visible ml-[1px] absolute -right-1 group-hover:-right-[5px] hover:bg-lightGray hover:pl-1 rounded-md h-full flex items-center delay-150 tooltip tooltip-right"
            data-tip="Text"
          >
            <RightIncon />
          </div>
        </div>

        <div
          aria-label="Pattern"
          className="flex justify-center items-center group relative mt-1"
        >
          <div className="hover:bg-lightGray p-1 rounded-md group">
            <PatternIcon />
          </div>
          <div
            className="invisible  group-hover:visible ml-[1px] absolute -right-1 group-hover:-right-[5px] hover:bg-lightGray hover:pl-1 rounded-md h-full flex items-center delay-150 tooltip tooltip-right"
            data-tip="Pattern"
          >
            <RightIncon />
          </div>
        </div>

        <div
          aria-label="Prediction"
          className="flex justify-center items-center group relative mt-1"
        >
          <div className="hover:bg-lightGray p-1 rounded-md group">
            <PredictionIcon />
          </div>
          <div
            className="invisible  group-hover:visible ml-[1px] absolute -right-1 group-hover:-right-[5px] hover:bg-lightGray hover:pl-1 rounded-md h-full flex items-center delay-150 tooltip tooltip-right"
            data-tip="Long Position"
          >
            <RightIncon />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
