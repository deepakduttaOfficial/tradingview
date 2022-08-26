import React from "react";
import {
  BrushIcon,
  CrossIcon,
  FilterIcon,
  PatternIcon,
  PredictionIcon,
  RightIncon,
  TextIcon,
  TrendLineIcon,
} from "./icons";

const Sidebar = () => {
  return (
    <div className="bg-white w-[52px] flex flex-col items-center px-[1px] py-2 rounded-r-md  h-[92vh]">
      <div>
        <div
          aria-label="Cross bar"
          className="flex justify-center items-center group relative mt-1"
        >
          <div className="hover:bg-lightGray p-1 rounded-md group">
            <CrossIcon />
          </div>
          <div
            className="invisible  group-hover:visible ml-[1px] absolute -right-1 group-hover:-right-[5px] hover:bg-lightGray hover:pl-1 rounded-md h-full flex items-center delay-150 tooltip tooltip-right"
            data-tip="Cross"
          >
            <RightIncon />
          </div>
        </div>

        <div
          aria-label="Trends Line"
          className="flex justify-center items-center group relative mt-1"
        >
          <div className="hover:bg-lightGray p-1 rounded-md group">
            <TrendLineIcon />
          </div>
          <div
            className="invisible  group-hover:visible ml-[1px] absolute -right-1 group-hover:-right-[5px] hover:bg-lightGray hover:pl-1 rounded-md h-full flex items-center delay-150 tooltip tooltip-right"
            data-tip="Trend line tools"
          >
            <RightIncon />
          </div>
        </div>

        <div
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
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
