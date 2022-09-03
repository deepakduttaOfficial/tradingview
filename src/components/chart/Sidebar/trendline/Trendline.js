import React, { useState } from "react";
import {
  AngleIcon,
  ArrowIcon,
  ExtendedIcon,
  InfoIcon,
  RayIcon,
  TrendLineIcon,
  HorizontalIcon,
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
        className={`absolute top-3 left-11 z-40 w-52 bg-[#fff] border border-gray py-2 shadow-2xl  overflow-scroll rounded-md
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
