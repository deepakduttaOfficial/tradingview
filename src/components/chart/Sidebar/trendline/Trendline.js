import React, { useState } from "react";
import {
  AngleIcon,
  ArrowIcon,
  ExtendedIcon,
  InfoIcon,
  RayIcon,
  TrendLineIcon,
  HorizontalIcon,
  HorizontalRayIcon,
  VerticalLineIcon,
  CrossIcon,
  ParallelIcon,
  RegressionIcon,
  FlatIcon,
  DisjointIcon,
  AnchoredIcon,
} from "./icons";

const Trendline = () => {
  const [open, setOpen] = useState(false);
  const [Icon, setIcon] = useState(<TrendLineIcon />);
  //  Main value
  const [option, setOption] = useState("Trend Line");
  const [value, setValue] = useState("Trend Line");
  // console.log(value);

  const isClick = (Icon, option, value) => {
    setOpen(!open);
    setOption(option);
    setIcon(Icon);
    setValue(value);
  };
  // Main value

  const trends = [
    { Component: <TrendLineIcon />, option: "Trend Line", value: 1 },
    { Component: <ArrowIcon />, option: "Arrow", value: 2 },
    { Component: <RayIcon />, option: "Ray", value: 3 },
    { Component: <InfoIcon />, option: "info line", value: 4 },
    { Component: <ExtendedIcon />, option: "Extended Line", value: 5 },
    { Component: <AngleIcon />, option: "Trend Angle", value: 6 },
    { Component: <HorizontalIcon />, option: "Horizontal Line", value: 7 },
    { Component: <HorizontalRayIcon />, option: "Horizontal Ray", value: 8 },
    { Component: <VerticalLineIcon />, option: "Vertical Line", value: 9 },
    { Component: <CrossIcon />, option: "Cross Line", value: 10 },
    { Component: <ParallelIcon />, option: "Parallel Channel", value: 11 },
    { Component: <RegressionIcon />, option: "Regression Trend", value: 12 },
    { Component: <FlatIcon />, option: "Flat Top/Bottom", value: 13 },
    { Component: <DisjointIcon />, option: "Disjoint Channel", value: 14 },
    { Component: <AnchoredIcon />, option: "Anchored VWAP", value: 15 },
  ];
  console.log(value);
  return (
    <div
      aria-label="Trends Line"
      className="flex justify-center items-center group relative mt-1"
    >
      <div
        className="hover:bg-lightGray p-1 rounded-md group tooltip tooltip-right"
        data-tip={option}
        onClick={() => {
          setOpen(!open);
        }}
      >
        {Icon}
      </div>
      <ul
        className={`absolute top-0 left-11 z-40 w-52 bg-[#fff] border border-gray shadow-2xl  overflow-scroll rounded-md max-h-[82vh] 
        ${!open ? "hidden" : "block"} `}
        id="select"
      >
        <div>
          {trends.map((trend, index) => (
            <p
              className={`px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-sm text-left  ${
                option === trend.option
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : ""
              }`}
              onClick={() => {
                isClick(trend.Component, trend.option, trend.value);
              }}
              key={index}
            >
              {trend.Component}
              <span className="ml-3">{trend.option}</span>
            </p>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Trendline;
